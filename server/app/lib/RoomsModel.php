<?php
include ('../../app/RestServer.php');
class RoomsModel extends RestServer
{
    private $link;

    public function __construct()
    {
        parent::__construct();
        $this->link = $this->db;
    }

    public function getRooms($param=false)
    {

        /*$sql = "SELECT id,name FROM rooms";
        $sth = $this->link->prepare($sql);
        $result = $sth->execute();
        if (false === $result)
        {
            return false;
        }
        $data = $sth->fetchAll(PDO::FETCH_ASSOC);
        if (empty($data))
        {
            return false;
        }
        $str = json_encode($data);
        return $str;*/
        
        
        var_dump($param[0]);
          
       if($param[0] == "")
       {
          $sql = "SELECT id,name FROM rooms";
              $sth = $this->link->prepare($sql);
               $result = $sth->execute();
             $data = $sth->fetchAll(PDO::FETCH_ASSOC);
               return $data;
       }
        if ($param !== false)
        {
            $sql = "SELECT id,name FROM rooms";
            $sql .= " WHERE "."id" .'='.$this->link->quote($param[0]).' AND ';
       
        $sql = substr($sql, 0, -5);
        $sth = $this->link->prepare($sql);
        $result = $sth->execute();
        $data = $sth->fetchAll(PDO::FETCH_ASSOC);
        return $data;
        }
        
        
    }

}