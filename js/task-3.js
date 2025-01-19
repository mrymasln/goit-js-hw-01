function getElementWidth(content, padding, border) {
    // 'px' değerlerini sayısal değerleri
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // İki taraf için
    const borderWidth = parseFloat(border) * 2;  // İki taraf için

    // toplam genişlik
    const totalWidth = contentWidth + paddingWidth + borderWidth;

    // toplam genişlik
    return "${totalWidth}px";
}