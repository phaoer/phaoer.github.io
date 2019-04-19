import React, { Component } from 'react';

import ReactDOM from "react-dom";

import { Layout, Menu, Icon} from 'antd';

require("./main.css");

const { Header, Content, Footer, Sider } = Layout;

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:true,
            content : ''
        }
        this.switchTab = this.switchTab.bind(this);
        this.contentRender = this.contentRender.bind(this);
        this.requestType = ["pro","fw","wap","essay"];
        this.cache = {};
        this.defaultItem = {
            key:1
        };
    }

    componentDidMount(){
        this.switchTab(this.defaultItem);
    }

    switchTab(obj){
        const _this = this;
        let type = this.requestType[obj.key - 1];
        if(this.cache[type]){
            _this.menuRender(type,this.cache[type]);
            return false;
        }
        $.getJSON('https://phaoer.imroc.io:8080/index.php/githubio/index?callback=?',{type:type},function(res){
            _this.cache[type] = res;
            _this.menuRender(type,res);
        });
    }

    menuRender(type,res){
        let html = "";
        res.list.map(function(ele,index){
            html += '<li><svg aria-hidden="true" class="octicon octicon-repo repo-icon" height="30" version="1.1" viewBox="0 0 12 16" width="20"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg><a href="javascript:;" type="'+ type +'" item="'+ index +'" id="' + type + (index + 1) + '">' + ele.title + '</a><p>' + ele.describle + '</p></li>';
        })
        html += '	</ul></div>';
        this.setState({
            content:html
        })
    }

    contentRender(e){
        const {cache} = this;
        const converter = new showdown.Converter();
        if(e.target.id.indexOf("pro") > -1 || e.target.id.indexOf("fw") > -1 || e.target.id.indexOf("wap") > -1 || e.target.id.indexOf("essay") > -1){
            this.setState({
                content:converter.makeHtml(cache[e.target.getAttribute('type')]["list"][e.target.getAttribute('item')]["content"])
            })
        }
    }

	render(){
		return (
            <div>
                <Layout style={{ height: '100%'}}>
                    <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    >
                    <div className="logo"><img src="./resource/img/pwh.png" /></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} onClick={this.switchTab}>
                        <Menu.Item key="1">
                        <Icon type="code" />
                        <span className="nav-text">JS疑难</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="layout" />
                        <span className="nav-text">前端框架</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="mobile" />
                        <span className="nav-text">移动端</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                        <Icon type="highlight" />
                        <span className="nav-text">随笔</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                    <Header className="header"  style={{ background: '#fff'}}> <span>Created by Irwin Pu</span> <a href="https://github.com/phaoer/phaoer.github.io" style={{ color: '#325d36'}}><svg height="24" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="pwh-list pwh-pro-list" dangerouslySetInnerHTML={{__html: this.state.content}} onClick={this.contentRender}></div>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)