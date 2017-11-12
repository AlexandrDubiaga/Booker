<?php
include ('../../app/RestServer.php');

/**
 * Class AdminsModel
 */
class AdminsModel extends RestServer
{
    private $link;

    /**
     * AdminsModel constructor.
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
    public function checkAdmins($param=false)
    {
        $id = $param[0];
        $sql = "SELECT events.id_user, users.login, users.id FROM events,users where events.id_user = users.id and events.id=".$id;
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