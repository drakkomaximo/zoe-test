const sortList = (type: string, initialLsit: any, setLists: any) =>{
    const newList = [...initialLsit]
      switch (type) {
          case 'id':
              const newListWithId = newList.sort((a: any, b:any) => {
                  if (a.id > b.id) {
                    return 1;
                  }
                  if (a.id < b.id) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                })
                setLists(newListWithId)
              break;
          case 'name':
            const newListWithName = newList.sort((a: any, b:any) => {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                })
                setLists(newListWithName)
              break;
          case 'less':
            const newListWithHigh = newList.sort((a: any, b:any) => {
                  if (a.income > b.income) {
                    return 1;
                  }
                  if (a.income < b.income) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                })
                setLists(newListWithHigh)
              break;
          case 'high':
            const newListWithLess = newList.sort((a: any, b:any) => {
                  if (a.income < b.income) {
                    return 1;
                  }
                  if (a.income > b.income) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                })
                setLists(newListWithLess)
              break;
      
          default:
              break;
      }
  }

export default sortList
