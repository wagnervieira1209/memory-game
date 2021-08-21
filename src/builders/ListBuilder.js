class ListBuilder {
  constructor(list) {
    this.list = list || []; // inicia como lista se não for passado nada
  }

  createList(total) {
    const createListLoop = (keyPrefix) => {
      for (let i = 1; i <= total; i++) {
        this.list.push({
          id: i,
          key: `${keyPrefix}-${i}`,
          name: `Card ${i}`,
          isActive: false,
          hasMatch: false,
        });
      }
    };

    createListLoop(1);
    createListLoop(2);

    return this;
  }

  shufle(){
    const newList = this.list.slice();

    for (let i = newList.length - 1; i > 0; i -= 1){
        const j = Math.floor(Math.random() * (i + 1));
        [newList[i], newList[j]] = [newList[j], newList[i]]
    }

    this.list = newList;

    return this;
  }

  build() {
    return this.list;
  }
}

export default ListBuilder;
