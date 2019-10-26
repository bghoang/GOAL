function check(status) {
  if (status == "incompleted") {
    return "danger";
  }
  if (status == "in progress") {
    return "warning";
  }
  if (status == "completed") {
    return "success";
  }
}
