import _ from 'lodash';

function component() {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  
    return element;
  }
  
  // 컴포넌트 결과를 화면에 출력한다.
  document.body.appendChild(component());