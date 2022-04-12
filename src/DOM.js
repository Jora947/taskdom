/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const div = document.createElement(tag);
        div.innerHTML = content;
        document.body.appendChild(div);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let childAdd = (childrenCount, deep) => {
        let res = document.createElement('div');
        res.classList.add('item_' + deep);
        if (deep < level) {
            for (let i = 0; i < childrenCount; i++) {
                res.appendChild(childAdd(childrenCount, deep + 1));
            }
        }
        return res;
    };
    return childAdd(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let node = generateTree(2, 3);
    let items = node.getElementsByClassName('item_2');

    Array.from(items).forEach((elem) => {
        const childNodes = elem.childNodes;
        const el = document.createElement('section');
        el.classList.add('item_2');
        Array.from(childNodes).forEach((elem) => {
            el.appendChild(elem);
        });
        elem.replaceWith(el);
    });
    return node;
}
