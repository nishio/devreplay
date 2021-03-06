module.exports = [
    {
      condition: [
        'expires'
      ],
      consequent: [
        'message'
      ]
    },
    {
      condition: [
        'isInstanceOf<${1:MyType}>'
      ],
      consequent: [
        'isA<${1:MyType}>'
      ]
    },
    {
      condition: [
        'throws'
      ],
      consequent: [
        'throwsA'
      ]
    }
]