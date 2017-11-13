<?php
include ('../../app/RestServer.php');

/**
 * Class EventsModel
 */
class EventsModel extends RestServer
{
    private $link;

    /**
     * EventsModel constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->link = $this->db;
    }

    /**
     * @param bool $param
     * @return bool|string
     */
    public function checkEvent($param=false)
    {
        if($param[0] == "")
        {
            echo $param[0];
//              $sql = "SELECT e.id, e.id_user,u.login as user_name,e.id_room,r.name as room_name,e.description,e.time_start,e.time_end,e.id_parent,e.create_time FROM events e LEFT JOIN users u ON e.id_user=u.id LEFT JOIN rooms r ON e.id_room=r.id";
//             $sql .= " WHERE "."e.id_room" .'='.$this->link->quote(1).' AND ' ;
//             $sql = substr($sql, 0, -5);
//             $sth = $this->link->prepare($sql);
//             $result = $sth->execute();
//             if (false === $result)
//             {
//                 return false;
//             }
//             $data = $sth->fetchAll(PDO::FETCH_ASSOC);
//             if (empty($data))
//             {
//                 return false;
//             }
//             $str = json_encode($data);

//             return $str;
//             $sql = "SELECT events.id,events.id_user,events.id_room,events.description,events.time_start,events.time_end,events.id_parent,events.create_time FROM events";
//             $sth = $this->link->prepare($sql);
//             $result = $sth->execute();
//             if (false === $result)
//             {
//                 return false;
//             }
//             $data = $sth->fetchAll(PDO::FETCH_ASSOC);
//             if (empty($data))
//             {
//                 return false;
//             }
//             $str = json_encode($data);

//             return $str;
        }
        if ($param[0] !== false)
        {
           $sql = "SELECT e.id, e.id_user,u.login as user_name,e.id_room,r.name as room_name,e.description,e.time_start,e.time_end,e.id_parent,e.create_time FROM events e LEFT JOIN users u ON e.id_user=u.id LEFT JOIN rooms r ON e.id_room=r.id";
            $sql .= " WHERE "."e.id_room" .'='.$this->link->quote($param[0]).' AND ' ;
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

    /**
     * @param $url
     * @param $param
     * @return bool|int
     */

    public function addEvent($url,$param)
    {
        $descChange = str_replace("+", " ", $param['description']);
        date_default_timezone_set('Europe/Kiev');
        if(isset($param['id_user'])&& isset($param['id_room']) && isset($descChange)  && isset($param['time_start']) && isset($param['time_end']))
        {
                $idUser = $this->link->quote($param['id_user']);
                $idRoom= $this->link->quote($param['id_room']);
                $desc= $this->link->quote($descChange);
                $start = date('Y-m-d H:i:s',$param['time_start']);
                $end = date('Y-m-d H:i:s',$param['time_end']);
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
        }else
        {
            return false;
        }
        return false;
    }

    /**
     * @param $url
     * @param $param
     * @return bool|int
     */
    public function updateEvent($url,$param)
    {
        date_default_timezone_set('Europe/Kiev');
        $curId =  trim($this->link->quote($param['id']), "'");
        $idUser =  $this->link->quote($param['id_user']);
        $idRoom=  $this->link->quote($param['id_room']);
        $desc=   $this->link->quote($param['description']);
        $startTime = $param['time_start'];
        $start = $this->link->quote($startTime);
        $endTime = $param['time_end'];
        $end = $this->link->quote($endTime);
        $idParent=1;
        $par =  $this->link->quote($idParent);
        $createtime = date('Y-m-d H:i:s',$param['create_time']);
        $create = $this->link->quote($createtime);
        $sql = 'UPDATE events SET id_user='.$idUser.',id_room='. $idRoom .',description='. $desc .',time_start='. $start .',time_end='. $end .',id_parent='. $par .',create_time='. $create .' WHERE id='.$curId;
        $count = $this->link->exec($sql);
        if ($count === false)
        {
            return false;
           
        }
        if($count === true)
        {
            
            return 1;
        }
    }

    /**
     * @param $id
     * @param $url
     * @return bool
     */
    public function deleteEvent($id,$url)
    {
        $idEvent = $this->link->quote($id[0]);
        $sql = "DELETE FROM events WHERE id = ".$idEvent;
        $count = $this->link->exec($sql);
        if($count)
        {
            return true;
        }
        else{
            return false;
        }

    }

}
