<?php
//inclube('config.php');
class DB
{
    protected $dBMain;
    public function __construct()
    {
        //$this->dBMain = new PDO('mysql:host=localhost;dbname=user2', 'user2', 'tuser2');
        //$this->dBMain = new PDO('mysql:host=127.0.0.1;dbname=Booker', 'mysql', 'mysql');
        $this->dBMain = new PDO('mysql:host=10.3.149.74;dbname=Booker', 'bti', 'bti');
        if (!$this->dBMain)
        {
            throw new PDOException("Error db");
        }
    }
}

?>
