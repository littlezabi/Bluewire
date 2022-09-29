<?php
function xml2array ( $xmlObject, $out = array () )
{
    foreach ( (array) $xmlObject as $index => $node )
        $out[$index] = ( is_object ( $node ) ) ? xml2array ( $node ) : $node;
    return $out;

}
$filename = 'file.xml';
$fp = fopen($filename, "r"); 
$fText = fread($fp, filesize($filename));
$fText = str_replace('itunes:', 'itunes__', $fText);

$fText = str_replace('<![CDATA[', '__desc_start__', $fText);
$fText = str_replace(']]>', '__desc_end__', $fText);

$invalid_characters = '/[^\x9\xa\x20-\xD7FF\xE000-\xFFFD]/';
$fText = preg_replace($invalid_characters, '', $fText);


$xml_data = simplexml_load_string($fText);
$root = xml2array($xml_data);
$finalize = new stdClass();
foreach($root as $child){
    foreach($child as $items){
        if(gettype($items) == 'array'){
            if(count($items) > 0){
                foreach($items as $item){
                    if(isset($item[0])){
                        if(gettype($item[0]) == 'object'){
                            $title = $item->itunes__title;
                            $title = explode('-', $title)[0];
                            $title = trim($title);
                            if(isset($finalize->$title))
                                $finalize->$title = array($item, ...$finalize->$title);
                            else $finalize->$title = array($item);
                        };
                    }
                }
            }
        }
        
    }
    
}
print_r($finalize);
?>