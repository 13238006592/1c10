import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "@assets/iconfont/iconfont.css";
import ReactSwipe from 'react-swipe';







class Home extends Component{
	constructor(props) {
		super(props);
		this.state={
			homelist:[]
		}
		
		
	}

	componentDidMount(){

		axios.get("http://localhost:3000/api/home").then(res=>{

	    		console.log(res);
	    		
	    		
	    		this.setState({
	    			homelist:res.status==200?res.data.data:[]
	    		})
	    		
	    })
	}

	render() {
		return <div id="home">
			<nav>
				
				<a href='javascript:;'>桐乡</a>
				
				
				<em>一传十传百</em>

				<b>
					<i className="iconfont icon-denglu"></i><span>我的</span>
				</b>
			</nav>
			<div id="search">
				<div className="search">
					<span>输入商家名字/商品名称获得优惠 </span>
				</div>
			</div>
			<div className="slider">
				<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
	                <div><img src="../../../img/pic1.jpg"/></div>
	                <div><img src="../../../img/pic2.jpg"/></div>
	                <div><img src="../../../img/pic3.jpg"/></div>
	            </ReactSwipe>
            </div>
            <div className="home-list clear">
            	<a>
            		<div className="home-img"><img src="../../../img/img (8).png" /></div>
            		<div className="home-text">旅游</div>
            	</a>
            	<a>
            		<div className="home-img"><img src="../../../img/img (7).png" /></div>
            		<div className="home-text">美食</div>
            	</a>
            	<a>
            		<div className="home-img"><img src="../../../img/img (6).png" /></div>
            		<div className="home-text">丽人养生</div>
            	</a>
            	<a className="home-no-border">
            		<div className="home-img"><img src="../../../img/img (5).png" /></div>
            		<div className="home-text">KTV</div>
            	</a>
            	<a>
            		<div className="home-img"><img src="../../../img/img (4).png" /></div>
            		<div className="home-text">酒店</div>
            	</a>
            	<a>
            		<div className="home-img"><img src="../../../img/img (3).png" /></div>
            		<div className="home-text">电影</div>
            	</a>
            	<a>
            		<div className="home-img"><img src="../../../img/img (2).png" /></div>
            		<div className="home-text">代金券</div>
            	</a>
            	<a className="home-no-border">
            		<div className="home-img"><img src="../../../img/img (1).png" /></div>
            		<div className="home-text">全部优惠</div>
            	</a>
            </div>
            <div className="home-h3">
            	本周推荐
            </div>
            <ul className="home-list2">
            	{
            		this.state.homelist.map(item=>
            			<li key={item.id} className="home-li clear">
            				<div className="list-img left">
            					<img src={item.image_1280} />
            				</div>
            				<div className="list-right left">
            					<div className="list-right-top">
            						<div className="list-right-top-left">
            							<p className="text-strong">{item.store_name}</p>
            							<p>{item.subtitle}</p>
            						</div>
            						<div className="list-right-top-right">
            							{item.city_name}
            						</div>
            					</div>
            					<div className="list-right-bottom">
            						<div className="list-right-bottom-left">
            						<span className="price">￥{item.price}</span> / <s className="pre-price">{item.origin_price}</s>
            						</div>
            						<div className="list-right-bottom-right">
                                                      <i className="iconfont icon-denglu"></i> {item.buy_num}
            						</div>
            					</div>
            				</div>
            			</li>
            		)
            	}
            </ul>
			
    	</div>
    
    		
	}	
}

export default Home;