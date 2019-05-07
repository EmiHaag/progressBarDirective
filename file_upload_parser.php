<?php
$fileName     = $_FILES["file1"]["name"];
$fileTmpLoc   = $_FILES["file1"]["tmp_name"];
$fileType     = $_FILES["file1"]["type"];
$fileSize     = $_FILES["file1"]["size"]; //file size in bytes
$fileErrorMsg = $_FILES["file1"]["error"]; // 0 for false and 1 for true
$dir          = "files/";
//si no existe el directorio
if (!file_exists($dir)) {
    //se crea directorio con nombre de la id del cliente
    mkdir($dir, 0777, true);
    chmod($dir, 0777);

}
if (!$fileTmpLoc) {
    //if file not chosen
    echo "ERROR: Please browse for a file before clicking the upload button";
    exit();
}
if (move_uploaded_file($fileTmpLoc, "$dir$fileName")) {
    echo "$fileName upload is complete";
} else {
    echo "move uploaded file function failed";
}
