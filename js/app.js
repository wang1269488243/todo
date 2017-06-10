(function (window,angular) {
	//'use strict';
	//angular从这里开始
	var app=angular.module('todoApp',[]);
	app.controller('todoCtrl',['$scope',function ($scope) {
       // $scope.test='test'
		//查 增 删 改
        //查
		//[1,1,2,1]
		$scope.todoList=[
			{text:'css',status:true},
			{text:'css',status:true},
			{text:'angular',status:false},
			{text:'html5',status:true}
			]
		//增加
		$scope.todoText='';
		$scope.addTodo=function () {
			//判断$scope.todoText不为空
			if($scope.todoText){
                //获取到新的数据添加到todoList中
                $scope.todoList.push({text:$scope.todoText,status:'false'});
                //添加完todoText以后清空数据
                $scope.todoText=''
               // console.log('被触发了');
			}
        }
        //删除
		$scope.removeTodo=function (todo) {
			//找到索引
			var index=$scope.todoList.indexOf(todo);
			//根据索引删除数据
			$scope.todoList.splice(index,1);
            //console.log(todo);
        }

        //修改
		$scope.editing={};
		$scope.editTodo=function (todo) {
           // console.log(todo);
            $scope.editing=todo;
        }
        //失去焦点保存todo
        $scope.blurTodo=function () {
            $scope.editing={};
        }
		//全选
		//未完成的数量
		//对原有数据进行过滤
		//清除所有已完成数据
    }])
})(window,angular);
