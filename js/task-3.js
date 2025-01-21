function getElementWidth(content, padding, border) {
    // 'px' değerlerini sayısal değerleri
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // İki taraf için
    const borderWidth = parseFloat(border) * 2;  // İki taraf için

    // toplam genişlik
    const totalWidth = contentWidth + paddingWidth + borderWidth;

    // toplam genişlik
    return `${totalWidth}px`;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200