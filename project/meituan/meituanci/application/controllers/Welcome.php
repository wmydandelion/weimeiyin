<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this -> load -> model("product_model");
        $this -> load -> model("order_model");
    }
	public function index()
    {
        $results = $this->product_model->get_product();


		$this->load->view('index',array('result'=>$results));
	}

	public function detail($product_id)
    {

        $row = $this->product_model->get_product_by_id($product_id);

        $userinfo = $this->session->userdata('userinfo');
        if(empty($userinfo)){
            //没登录
            $row->collect = '收藏';
        }else{
            //已登录
            $user_id = $userinfo -> user_id;
            $collect = $this->product_model->get_collect($user_id,$product_id);
            if($collect == null){
                //未收藏 显示收藏
                $row->collect = '收藏';
            }else{
                //已收藏 显示取消
                $row->collect = '取消';
            }
        }


        $this -> load -> view('detail',array('row'=>$row));
    }

    public function success()
    {
        $this -> load -> view('success');
    }

}
