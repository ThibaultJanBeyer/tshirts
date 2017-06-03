/**
 * 
 * Pulls a dialog from outside screen
 * Based on the a11y-dialog from edenspiekermann via https://github.com/edenspiekermann/a11y-dialog
 * 
 */

// Helper function to get all focusable children from a node
function getFocusableChildren(node) {
  const focusableElements = [
    'a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])',
    'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object',
    'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'
  ];

  return $$(focusableElements.join(','), node).filter(function (child) {
    return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
  });
}

// Helper function to get all nodes in context matching selector as an array
function $$(selector, context) {
  return Array.prototype.slice.call((context || document).querySelectorAll(selector));
}

// Helper function trapping the tab key inside a node
function trapTabKey(node, event) {
  let focusableChildren = getFocusableChildren(node);
  let focusedItemIndex = focusableChildren.indexOf(document.activeElement);

  if (event.shiftKey && focusedItemIndex === 0) {
    focusableChildren[focusableChildren.length - 1].focus();
    event.preventDefault();
  } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
    focusableChildren[0].focus();
    event.preventDefault();
  }
}

// Helper function to focus first focusable item in node
function setFocusToFirstItem(node) {
  let focusableChildren = getFocusableChildren(node);
  if (focusableChildren.length) focusableChildren[0].focus();
}

let focusedBeforeDialog;

/**
 * A11yDialog constructor
 * @param {Node} node - Dialog element
 * @param {Node} main - Main element of the page
 */
const A11yDialog = function (node, main) {
  let namespace = 'data-a11y-dialog';
  let self = this;
  main = main || document.querySelector('#main');

  this.shown = false;
  this.show = show;
  this.hide = hide;

  $$('[' + namespace + '-show="' + node.id + '"]').forEach(function (opener) {
    opener.addEventListener('click', show);
  });

  $$('[' + namespace + '-hide]', node).concat($$('[' + namespace + '-hide="' + node.id + '"]')).forEach(function (closer) {
    closer.addEventListener('click', hide);
  });

  document.addEventListener('keydown', function (event) {
    if (self.shown && event.which === 27) {
      event.preventDefault();
      hide();
    }

    if (self.shown && event.which === 9) {
      trapTabKey(node, event);
    }
  });

  function maintainFocus(event) {
    if (self.shown && !node.contains(event.target)) {
      setFocusToFirstItem(node);
    }
  }

  function show() {
    self.shown = true;
    node.removeAttribute('aria-hidden');
    main.setAttribute('aria-hidden', 'true');
    focusedBeforeDialog = document.activeElement;
    setFocusToFirstItem(node);
    document.body.addEventListener('focus', maintainFocus, true);

    // TJB Modifications [start]
    // remove the scroll ability
    document.body.style = "overflow: hidden;";
    document.querySelector('html').style = "overflow: hidden;";
    // // TJB Modifications [end]
  }

  function hide() {
    // TJB Modifications [start]
    // make sure normal behaviour is delayed
    setTimeout(function () {
      // TJB Modifications [end]

      self.shown = false;
      node.setAttribute('aria-hidden', 'true');
      main.removeAttribute('aria-hidden');
      focusedBeforeDialog && focusedBeforeDialog.focus(); // jshint ignore:line
      document.body.removeEventListener('focus', maintainFocus, true);

      // TJB Modifications [start]
      // restore the scroll ability
      document.body.style = "overflow: auto;";
      document.querySelector('html').style = "overflow: auto;";
    }, 500);
    // TJB Modifications [end]
  }
};

export default A11yDialog;

// // Get the dialog element (with the accessor method you want)
// const dialogEl = document.getElementById('dialog');

// // Instanciate a new A11yDialog module
// const dialog = new A11yDialog(dialogEl);
