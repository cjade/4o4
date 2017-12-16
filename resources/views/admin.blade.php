<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="/css/admin.css" rel="stylesheet" type="text/css">

    </head>
    <body>
        <div id="app">
            <example></example>
        </div>
    </body>
    <script src="/js/admin.js"></script>
</html>