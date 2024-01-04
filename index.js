(function (context, modeName, definition) {
  //if node
  //global
  //module
  //module.exports
  if (typeof module !== "undefined" && module.exports) {
    module.exports = definition(context);
  }
  //if window
  //window obj
  else {
    context[modeName] = definition(context);
  }
})(this, "generateRandomNumber", function (context) {

  function generateRandomNumber(digits) {
    // حساب الحد الأدنى والحد الأعلى باستخدام الأسس
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;

    // إنشاء رقم عشوائي في النطاق المحدد
    const randomNumber = Math.floor(min + Math.random() * (max - min + 1));

    // إرجاع الرقم العشوائي
    return randomNumber;
  }
  return {generateRandomNumber : generateRandomNumber}  ;
});

