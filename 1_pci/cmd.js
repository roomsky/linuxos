new Vue({
    el: '#app',
    data: {
        codeList1:["00:00.0 Host bridge: Intel Corporation Sky Lake-E DMI3 Registers (rev 04)", 
                "00:02.0 VGA compatible controller: NVIDIA Corporation GA102 [GeForce RTX 3090] (rev a1)",
                "00:04.0 System peripheral: Intel Corporation Sky Lake-E CBDMA Registers (rev 04)",
                "5e:00.1 Ethernet controller: Intel Corporation 82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)",
                "d7:01.0 PCI bridge: Intel Corporation Sky Lake-E PCI Express Root Port B (rev 04)",
                "......"
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
    }
});