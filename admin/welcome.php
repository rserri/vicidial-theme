<?php
/**
 * Vicidial 12 Customized Theme - Admin Suite
 * Sostituisce la cartella originale 'vicidial' con un'interfaccia moderna e intuitiva.
 * Questo file rappresenta l'entrypoint di amministrazione personalizzato welcome.php.
 */

// Nel contesto dell'applicazione AI Studio Cloud Run, le richieste verso /admin/welcome.php 
// vengono servite dall'interfaccia single-page ottimizzata React per massimizzare la reattività.
header("Location: /admin/welcome.php");
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Vicidial 12 Admin Portal</title>
</head>
<body>
    <h1>Portale di Amministrazione Vicidial 12 Personalizzato</h1>
    <p>Flussi di lavoro snelli, gestione liste e integrazione CRM esterna.</p>
</body>
</html>
