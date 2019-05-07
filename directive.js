angular.module("fileDirectives", []).directive("file", function() {
    return {
        templateUrl: "file.html",
        link: function($scope, elem, attr) {
            var phpParserUrl = "file_upload_parser.php";

            function _(el) {
                return document.getElementById(el);
            }
            $scope.valueNow = 0;
            $scope.uploadFile = function() {
                var file = _("file1").files[0];
                //alert(file.name+" | "+file.size+" | " + file.type);
                var formdata = new FormData();
                formdata.append("file1", file);
                var ajax = new XMLHttpRequest();
                ajax.upload.addEventListener("progress", progressHandler, false);
                ajax.addEventListener("load", completeHandler, false);
                ajax.addEventListener("error", errorHandler, false);
                ajax.addEventListener("abort", abortHandler, false);
                ajax.open("POST", phpParserUrl);
                ajax.send(formdata);
            }

            function progressHandler(event) {
                var percent = (event.loaded / event.total) * 100;
                $scope.valueNow = Math.round(percent);
                _("val").innerHTML = $scope.valueNow + "%";
                _("progressBar").style.width = $scope.valueNow + "%";
                _("status").innerHTML = $scope.valueNow + "% uploaded.. please wait";
            }

            function completeHandler(event) {
                _("status").innerHTML = event.target.responseText;
                _("progressBar").style.width = 100;
                _("progressBar").style.backgroundColor = "#20c997";
                $scope.valueNow = 100;
            }

            function errorHandler(event) {
                _("progressBar").style.backgroundColor = "red";
                _("status").innerHTML = "Upload failed";
            }

            function abortHandler(event) {
                _("status").innerHTML = "Upload Aborted";
            }
        }
    }
});