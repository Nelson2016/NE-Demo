import React from 'react';
import NEditor from 'ne';

const Editor = NEditor.Editor;
const EditorStyle = NEditor.Style;

import N from '../../asset/images/N-black.png';
import style from '../../asset/scss/client/root.scss';

class Client extends React.Component {

    componentDidMount() {
        this.setContent();
        this.getContent();
    }

    /**
     * @description 获取编辑器内容
     */
    getContent() {
        const val = this.editor.val();
        this.showContent.innerHTML = val || '无内容';
    }

    /**
     * @description 设置编辑器内容
     */
    setContent() {
        this.editor.val('<h6>一、安装</h6><div><br></div><pre>npm install ne --save-dev</pre><p><br></p><h6>二、使用</h6><div><br></div><pre>const Editor = NEditor.Editor;<br>const EditorStyle = NEditor.Style;<br>&lt;Editor ref={e =&gt; this.editor = e}<br>&nbsp; &nbsp; &nbsp; &nbsp; uploadPictureConfig={{<br>&nbsp; &nbsp; &nbsp; &nbsp; action: \'/api/uploadPicture\',//本地图片上传地址<br>&nbsp; &nbsp; &nbsp; &nbsp; format: this.format//本地图片上传后的url格式化方法<br>&nbsp; &nbsp; &nbsp; &nbsp; }}/&gt;<br>&lt;div className={style[\'editor-container\']}&gt;<br>     &lt;article ref={e =&gt; this.showContent = e} className={EditorStyle[\'editor-container\']}&gt;<br>     &lt;/article&gt;<br>&lt;/div&gt;</pre><h5><br></h5><h6>三、API</h6><p><br></p><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p>Editor.val(value:string) 获取/设置编辑器的值</p></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p>value为空则返回编辑器的值，不为空则设置编辑器的值。</p></blockquote>');
        this.getContent();
    }

    /**
     * @description 格式化图片地址
     */
    format(url) {
        return url.replace('/dist', '');
    }

    /**
     * @description 锚点导航
     */
    scrollToDom(ref) {
        const dom = this[ref];
        if (dom) {
            dom.scrollIntoView();
        }
    }

    render() {
        return <div className={style['container']}>
            <div className={style['header-container']}>
                <img src={N} alt="logo"/>
                <p>一款简洁的基于react、支持服务端渲染的富文本编辑器</p>
                <nav>
                    <ul>
                        <li onClick={this.scrollToDom.bind(this, 'demo')}>Demo</li>
                        <li onClick={this.scrollToDom.bind(this, 'api')}>Api</li>
                        <li><a href="https://github.com/Nelson2016/NE" target="_blank">Github</a></li>
                    </ul>
                </nav>
            </div>

            <div ref={e => this.demo = e} className={style['editor-container']}>
                <Editor ref={e => this.editor = e}
                        uploadPictureConfig={{
                            action: '/api/uploadPicture',
                            format: this.format
                        }}/>

                <div className={style['buttons']}>
                    <button onClick={this.getContent.bind(this)} className={style['get-content-button']} type="button">
                        获取内容
                    </button>
                    <button onClick={this.setContent.bind(this)} className={style['set-content-button']} type="button">
                        设置内容
                    </button>
                </div>
            </div>

            <div ref={e => this.api = e} className={style['editor-container']}>
                <article ref={e => this.showContent = e} className={EditorStyle['editor-container']}>

                </article>
            </div>

            <div className={style['footer']}>请不吝赐教&nbsp;&nbsp;&nbsp;&nbsp;Nelson_Lee@outlook.com</div>
        </div>
    }

}

export default Client;