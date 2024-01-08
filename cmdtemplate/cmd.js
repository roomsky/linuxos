document.getElementById("copyButton").addEventListener("click", function () {
    // 获取所有带有特定类名的<p>标签
    var codeElements = document.querySelectorAll(".code");
    
    // 创建一个空字符串来保存所有代码片段
    var codeText = "";

    // 遍历每个<p>标签并将其文本内容添加到codeText
    codeElements.forEach(function (codeElement) {
        codeText += codeElement.textContent + "\n"; // 可以根据需要添加分隔符
    });

    // 创建一个临时文本区域并将合并的文本内容添加到其中
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = codeText;

    // 将文本区域添加到DOM中
    document.body.appendChild(tempTextArea);

    // 选择并复制文本区域的内容到剪切板
    tempTextArea.select();
    document.execCommand("copy");

    // 删除临时文本区域
    document.body.removeChild(tempTextArea);

    // 提示用户复制成功
    alert("已复制到剪切板");
});

document.getElementById('chatbox').addEventListener('click', function() {
    this.classList.toggle('expanded');
});
