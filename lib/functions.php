<?php
function getPage()
{
    if (isset($_GET['page'])) {
        if ($_GET['page'] != '')
            return $_GET['page'];
        else return 'view';
    } else {
        return 'view';
    }
}
function _print($str)
{
    echo '<pre>';
    print_r($str);
    echo '</pre>';
}
function printError($err)
{
    echo '<pre><p style="display:block;margin:15px;font-size: 18px;color: orangered;background: #00000017;padding: 5px;border-radius: 5px;"><b><i>';
    if (gettype($err) == 'array') {
        foreach ($err as $value) {
            print_r($value);
            echo '<br/>';
        }
    } else {
        print_r($err);
    }
    echo '</i></b></p></pre>';
}
function RealMan($styles = '')
{
    return '<span class="kxei322kdk" style="' . $styles . '">' . base64_decode('RGV2ZWxvcGVkIGJ5IExpdHRsZVphYmkgOik=') . '</span>';
}
function URLFormate($str1 = 0, $str2 = 0)
{
    if ($str1 && $str1 == '/') return '/';
    $return = '/page=';
    if ($str1 && $str2) return $return . $str1 . '&id=' . $str2;
    if ($str1) return $return . $str1;
    return $return;
}
