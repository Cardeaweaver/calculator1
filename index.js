document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');
  let expression = '';

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const buttonText = button.textContent;

          if (buttonText === 'C') {
              expression = '';
          } else if (buttonText === '=') {
              try {
                  expression = eval(expression);
              } catch (error) {
                  expression = 'Error';
              }
          } else {
              expression += buttonText;
          }

          display.value = expression;
      });
  });
});
