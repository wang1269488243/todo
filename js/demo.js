(function(window,angular){
	var app = angular.module('todoApp',[]);
	app.controller('todoCtrl',['$scope',function($scope){
		//实现增删改查功能;
		
		//查;使用数组对象储存每个input中的数据;
		$scope.todoList = [
			{text:'css',status:false},
			{text:'angular',status:false},
			{text:'html5',status:false},
			{text:'css',status:false}
		]
		
		//增加;获取绑定的输入框值,注册按键输入事件,将输入的值(对象)存入数组中;
		$scope.todoText = "";
		$scope.addTodo = function(){
			//进行重复提交判断
			if($scope.todoText){
				$scope.todoList.unshift({text:$scope.todoText,status:false});
				//提交成功后,清除输入框;
				$scope.todoText = '';
			}
		}
		
		//删;根据索引,将对象todo传入自定义的方法中,进行数组删除元素操作;
		$scope.removeTodo = function(todo){
			//通过索引获取当前对应的对象;
			var index = $scope.todoList.indexOf(todo);
			console.log(index+'----'+todo)
			//删除对象;
			$scope.todoList.splice(index,1);
		}
		
		//改;
		//增加一个编辑状态属性editing
		$scope.editing = {};
		//将双击input对应的todo对象返回到函数,并且对状态对象进行赋值,以便标签中使用状态对象进行比较判断是否点击的是该对象对应的input输入框;
		$scope.editTodo = function(todo){
			//点击的input对象赋值给状态对象;
			$scope.editing = todo;
		}
		//失去焦点,保存修改的值;
		$scope.blurTodo = function(){
			$scope.editing = {};
		}
		
		
	}])
})(window,angular)
