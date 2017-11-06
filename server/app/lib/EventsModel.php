<?php
include ('../../app/RestServer.php');
class EventsModel extends RestServer
{
    private $link;

    public function __construct()
    {
        parent::__construct();
        $this->link = $this->db;
    }

    public function checkEvent($param=false)
    {
        if($param[0] == "")
        {
            $sql = "SELECT events.id,events.id_user, users.login,events.id_room,rooms.name,events.description,events.time_start,events.time_end,events.id_parent,events.create_time FROM events,users,rooms WHERE events.id_user = users.id AND events.id_user = rooms.id";
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
            return $str;
        }
        if ($param[0] !== false)
        {
            $sql = "SELECT e.id, e.id_user,u.login as user_name,e.id_room,r.name as room_name,e.description,e.time_start,e.time_end,e.id_parent,e.create_time FROM events e LEFT JOIN users u ON e.id_user=u.id LEFT JOIN rooms r ON e.id_room=r.id";
            $sql .= " WHERE "."r.id" .'='.$this->link->quote($param[0]).' AND ';
            $sql = substr($sql, 0, -5);
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
            return $str;
        }

    }
    public function addEvent($url,$param)
    {  
        $date->setTimezone(new DateTimeZone('Europe/Kiev ') );
        $idUser = $this->link->quote($param['id_user']);
        $idRoom= $this->link->quote($param['id_room']);
        $desc= $this->link->quote($param['description']);
        $start = date('Y-m-d G:i:s',$param['time_start']);
        $end = date('Y-m-d G:i:s',$param['time_end']);
        $dateStart = $this->link->quote($start);
        $dateEnd = $this->link->quote($end);
        $idParent= $this->link->quote($param['id_parent']);
        $create = date('Y-m-d G:i:s',$param['create_time']);
        $dateCreate = $this->link->quote($create);

        $sql = "INSERT INTO events (id_user, id_room, description, time_start,time_end,id_parent,create_time) VALUES (".$idUser.", ".$idRoom.",".$desc.",".$dateStart.",".$dateEnd.",".$idParent.",".$dateCreate.")";
        $count = $this->link->exec($sql);
        if ($count === false)
        {
            return false;
        }
        return $count;
    }
    public function updateEvent($url,$param)
    {
        /*$id = $this->link->quote($param['id']);
        $login = $this->link->quote($param['login']);
        $email = $this->link->quote($param['email']);
        $sql = 'UPDATE users SET login=' . $login . ', email='.$email .' WHERE id=' . $id;
        $count = $this->link->exec($sql);
        if ($count === false)
        {
            return false;
        }
        else
        {
            return true;
        }*/



    }


}
