new Vue({
    el: '#app',
    data: {
        codeList1:[
            "sudo apt-get install tmux", 
            "sudo yum install tmux",
            "brew install tmux"
        ],
        annotationList1:[
            "Ubuntu 或 Debian",
            "CentOS 或 Fedora",
            "Mac"
        ],
        elementData:'',
        cmd1isClicked:false
    },
    methods : {
        copyCode(elementRef){
            const paragraphs = this.$refs[elementRef];
            console.log(paragraphs);
            const textArray = paragraphs.map(p => p.textContent);
            this.elementData = textArray.join('\n');
            navigator.clipboard.writeText(this.elementData)
            .then(() => {
                alert("已复制到剪切板");
            })
            .catch(err => {
                console.error('复制失败: ', err);
            });
        },
        claerAll(){
            this.cmd1isClicked = false;
            this.cmd2isClicked = false;
        }
    },
    computed:{
        combinedList1() {
            const combined = [];
            for (let i = 0; i < this.annotationList1.length; i++) {
              combined.push({ type: 'annotation', content: this.annotationList1[i] });
              combined.push({ type: 'code', content: this.codeList1[i] });
            }
            return combined;
        }
    }
});