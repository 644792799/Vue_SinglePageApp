const CLOSEEVENTINFO = [
	{
		code: 1000,
		message: '正常关闭'
	},
	{
		code: 1001,
		message: '终端离开, 可能因为服务端错误, 也可能因为浏览器正从打开连接的页面跳转离开'
	},
	{
		code: 1002,
		message: '由于协议错误而中断连接'
	},
	{
		code: 1003,
		message: '由于接收到不允许的数据类型而断开连接 (如仅接收文本数据的终端接收到了二进制数据)'
	},
	{
		code: 1005,
		message: '没有收到预期的状态码'
	},
	{
		code: 1006,
		message: '期望收到状态码时连接非正常关闭 '
	},
	{
		code: 1007,
		message: '由于收到了格式不符的数据而断开连接 (如文本消息中包含了非 UTF-8 数据)'
	},
	{
		code: 1008,
		message: '由于收到不符合约定的数据而断开连接. 这是一个通用状态码, 用于不适合使用 1003 和 1009 状态码的场景'
	},
	{
		code: 1009,
		message: '由于收到过大的数据帧而断开连接'
	},
	{
		code: 1010,
		message: '客户端期望服务器商定一个或多个拓展, 但服务器没有处理, 因此客户端断开连接'
	},
	{
		code: 1011,
		message: '客户端由于遇到没有预料的情况阻止其完成请求, 因此服务端断开连接'
	},
	{
		code: 1012,
		message: '服务器由于重启而断开连接'
	},
	{
		code: 1013,
		message: '服务器由于临时原因断开连接, 如服务器过载因此断开一部分客户端连接'
	},
	{
		code: 1015,
		message: '连接由于无法完成 TLS 握手而关闭 (例如无法验证服务器证书)'
	}
]

let websocket = {
	ws: undefined,
	default_options: {
		url: 'ws://localhost:',
		port: '8080',
		protocols: ''
	},
	createWebsocket(options){
		this.default_options = options = options || this.default_options;
		let _wsurl;
		if(options.url.endsWith(':')){
			_wsurl = options.url + options.port + "/";
		}else{
			_wsurl = options.url + ":" +  options.port + "/";
		}

		let socket;
		if('WebSocket' in window){
		 	socket = new WebSocket(_wsurl);
		}else if('MozWebSocket' in window){
			socket = new MozWebSocket(_wsurl);
		}else{
			socket = new SockJS(_wsurl);
		}

		if(options.onopen){
			socket.onopen = function(event){
				options.onopen(event);
			}
		}

		if(options.onmessage){
			//event.data可以是文本、blob对象、arrayBuffer
			socket.onmessage = function(event){
				options.onmessage(event);
			}
		}

		if(options.onerror){
			socket.onerror = function(event){
				options.onerror(event);
			}
		}

		if(options.onclose){
			socket.onclose = function(event){
				options.onclose(event);
			}
		}
		this.ws = socket;
	},
	close(code, reason){
		try{
			if(this.ws){
				//this.ws.close(code, reason);
				this.ws.close();
			}else{
				throw '调用websocket的close方法前，请先调用createWebsocket方法'
			}
		}catch(err){
			//log
		}
	},
	//可以是文本、blob对象、arrayBuffer
	send(data){
		try{
			if(this.ws){
				this.ws.send(data);
			}else{
				throw '调用websocket的send方法前，请先调用createWebsocket方法'
			}
		}catch(err){
			//log
		}
	},
	isSendOver(){
		if (this.ws.bufferedAmount === 0) {
		  return true;
		} else {
		  return false;
		}
	},
	readyState(){
		let stateInfo = {};
		try{
			if(this.ws){
				let stateCode = this.ws.readyState;
				switch(stateCode){
					case 0:
						stateInfo = {
							code: 0,
							description: '连接还没开启'
						}
						break
					case 1:
						stateInfo = {
							code: 1,
							description: '连接已开启并准备好进行通信'
						}
						break;
					case 2:
						stateInfo = {
							code: 2,
							description: '连接正在关闭的过程中'
						}
						break;
					case 3:
						stateInfo = {
							code: 3,
							description: '连接已经关闭，或者连接无法建立'
						}
						break;
					default:
						stateInfo = {
							code: 999,
							description: '未知的连接状态'
						}
						break;
				}
			}else{
				throw '调用websocket的getReadyState方法前，请先调用createWebsocket方法'
			}
		}catch(err){
			stateInfo = {
				code: 999,
				description: err
			}
		}
		return stateInfo;
	},
	binaryType(event){
		return typeof event.data;
	}
}

export default websocket;
