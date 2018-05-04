/*
This function loops through the student list and decides
if the student should be shown on the page
*/
const showPage = (pageNumber, studentList) => {
  for (let i = 0; i < studentList.length; i++) {
    $(studentList[i]).hide();

    if (i >= (pageNumber * 10) && i <= (pageNumber * 10 + 9)) {
      $(studentList[i]).show();
    }
  }
};

/*
This function creates and appends the pagination links to the page
and displays the students
*/
const appendPageLinks = studentList => {
  const pageNumber = Math.ceil(studentList.length / 10);
  const pageLinks = [];

  for (let i = 0; i < pageNumber; i++) {
    pageLinks.push(`<li> <a href="#">${i + 1}</a> </li>`);
  }

  const pageLinkSection = `
    <div class="pagination">
      <ul>
        ${pageLinks.join("")}
      </ul>
    </div>
  `;

  $(".page").append(pageLinkSection);
  $("a").first().addClass("active");

  $("a").on("click", (e) => {
    const currentPageNum = e.target.text - 1;

    showPage(currentPageNum, studentList);

    // Gives the current selected page link a class of "active"
    if (e.target.text == (currentPageNum + 1)) {
      $("a").removeClass();
      e.target.className = "active";
    }
  });

  showPage(0, studentList);
};

appendPageLinks($(".student-item"));
