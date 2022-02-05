/* eslint-disable prettier/prettier */
function classifier(values) {
  const listNames = []

  const itIsMe = values.find(item => item.itIsMe)

  const responsibleFilter = values.filter(item => item.responsible)
  const responsible = responsibleFilter.map(item => item.name).sort()

  const notResponsibleFilter = values.filter(item => !item.responsible)
  const notResponsible = notResponsibleFilter.map(item => item.name).sort()

  listNames.push({
    itIsMe: itIsMe.name
  }, {
    responsible: responsible
  }, {
    notResponsible: notResponsible
  })

  return listNames
}

const users = [{
    itIsMe: true,
    responsible: true,
    name: 'Silvio Dias'
  },
  {
    itIsMe: false,
    responsible: true,
    name: 'Viviane Birello'
  },
  {
    itIsMe: false,
    responsible: false,
    name: 'Pedro Henrique'
  },
  {
    itIsMe: false,
    responsible: false,
    name: 'Melissa Guedes'
  },
  {
    itIsMe: false,
    responsible: false,
    name: 'Antonio Dias'
  },
  {
    itIsMe: false,
    responsible: false,
    name: 'Paulo Dias'
  }
]

console.log(classifier(users))
