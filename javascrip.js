const contentMap = {
  about: `<div style="padding:100px;">
      <p class = "content-introduce1">GIỚI THIỆU VỀ CHÚNG TÔI</p>
      <li class = "content-introduce2"><p>Chúng tôi cung cấp một bộ sưu tập giày thể thao chất lượng cao, phù hợp với mọi hoạt động thể thao. Từ chạy bộ đến bóng rổ, bạn sẽ tìm thấy những đôi giày mang lại sự thoải mái và hỗ trợ tốt nhất cho đôi chân. Với thiết kế hiện đại và công nghệ tiên tiến, giày thể thao của chúng tôi không chỉ đẹp mắt mà còn giúp bạn đạt được hiệu suất tốt nhất.</p></li>
      <li class = "content-introduce3"><p>Bộ sưu tập đồ thể thao của chúng tôi bao gồm áo thun, quần shorts, và trang phục thể thao khác được làm từ chất liệu thoáng khí, giúp bạn cảm thấy thoải mái khi tập luyện. Các sản phẩm được thiết kế để tối ưu hóa sự linh hoạt và độ bền, cho phép bạn thực hiện mọi động tác mà không bị cản trở.</p></li>
      <li class = "content-introduce4"><p>Chúng tôi tự hào giới thiệu các mẫu áo bóng đá đội tuyển quốc gia với thiết kế đẹp mắt và chất lượng tuyệt vời. Mỗi chiếc áo không chỉ mang đến sự tự hào cho người hâm mộ mà còn được làm từ vải chống ẩm, giúp bạn luôn khô ráo trong mọi trận đấu. Hãy thể hiện niềm đam mê của bạn với đội tuyển bằng cách sở hữu một chiếc áo chính hãng!</p></li>
      <li class = "content-introduce5"><p>Chúng tôi cung cấp một bộ sưu tập đồ thể thao dành riêng cho trẻ em, bao gồm áo thun, quần shorts, và trang phục thể thao được thiết kế với chất liệu an toàn và thoáng khí. Những sản phẩm này không chỉ mang lại sự thoải mái trong suốt quá trình vận động mà còn giúp trẻ tự do khám phá và phát triển kỹ năng thể thao. Đồ thể thao trẻ em của chúng tôi có nhiều kiểu dáng và màu sắc, phù hợp với sở thích của từng bé.</p></li>
      <li class = "content-introduce6"><p>Chúng tôi tự hào hợp tác với các thương hiệu thể thao hàng đầu để mang đến cho khách hàng những sản phẩm chất lượng nhất. Sự hợp tác này giúp chúng tôi cung cấp cho bạn những sản phẩm chính hãng với công nghệ tiên tiến và thiết kế hiện đại. Chúng tôi luôn cập nhật các xu hướng mới nhất từ các thương hiệu nổi tiếng để đảm bảo rằng khách hàng của chúng tôi có được những sản phẩm tốt nhất trên thị trường.</p></li>
      </div>`,
};
function updateContent(contentKey) {
  const contentDiv = document.getElementById("content-introduce");
  if (contentMap[contentKey]) {
    contentDiv.innerHTML = contentMap[contentKey];
  }
}
document.querySelector(".login").addEventListener("click", function (event) {
  event.preventDefault();
  const contentKey = event.target.getAttribute("data-content");
  if (contentKey) {
    console.log(contentKey);
    updateContent(contentKey);
  }
});
