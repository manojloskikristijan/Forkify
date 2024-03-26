import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class ResultView extends View {
  _parentEl = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(p => previewView.render(p, false)).join('');
  }
}

export default new ResultView();

{
  /* <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div> */
}
