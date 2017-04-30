/**
 * a very simple function that transforms 
 * some string into an SEO friendly url 
 *
 * @param {string}  _text        // required
 * @param {integer} _maxLength   // optional
 *
 */
const seoFriendlyUrl = function(_text, _maxLength, lowerCase) {
  const maxLength = _maxLength || 25;
  let text = _text;

  // shorten text if super long (old IE has probles with long urls)
  if(text.length > maxLength) text = text.substring(0, maxLength);

  // lowercase because urls are case sensitive
  if(!lowerCase) text = text.toLowerCase();
  
  // for my crazy german friends
  text = text.replace(/ä/g, 'ae');
  text = text.replace(/Ä/g, 'AE');
  text = text.replace(/ö/g, 'oe');
  text = text.replace(/Ö/g, 'OE');
  text = text.replace(/ü/g, 'ue');
  text = text.replace(/Ü/g, 'UE');
  
  // replace everything that is not number or letter by a dash
  text = text.replace(/[^A-Za-z0-9]/g, '-');

  return text;
};

export default seoFriendlyUrl;
