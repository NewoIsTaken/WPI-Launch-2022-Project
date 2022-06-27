<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Docker Controller</title>


</head>
<body>
    <h1 class="menuStyle">
        <span class="menuStyle">Docker Management Platform</span>
    </h1>

    <table class="tableFormat">
        <tbody>
            <tr>
			<td class="openPage"><a href="http://UNLINKME">Local</span></span></a></td>              
            <td class="menuStyle"><a href="http://UNLINKME">Remote</span></a></td>
            </tr>
        </tbody>
    </table>
    <p><code><a href="/terminal.html" onclick="window.open(this.href, 'TerminalOutputView', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=yes,scrollbars=no,dependent=no'); return false;">Open</a></code></p>
    <code class="terminalOutputstyle" id="terminalOutput"> Terminal Output </code>

    <table id="instance-list">
        <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>State</th>
                <th>Action</th>
            </tr>
        </tbody>
    </table>

    <p>&nbsp;</p>

    <script src="api.js"></script>
</body>
</html>