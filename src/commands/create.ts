import {Command, flags} from '@oclif/command'

export default class Create extends Command {
  static description = 'Create a new Pizza'

  static examples = [
    `$ pizza create
Your pizza is ready!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    crust: flags.string({char: 'c', description: 'Type of Crust (Thin/Thick)'}),
    toppings: flags.string({char: 't', description: 'Toppings to add', options: ['pepperoni', 'mushroom', 'bacon', 'pineapple'], multiple: true}),
    'extra-sauce': flags.boolean({char: 'x', description: 'Do you want extra sauce?'}),
  }

  static args = [
    {
      name: 'count',
      required: false,
      description: 'How many pizza you want to create',
      parse: (input: string) => parseInt(input, 10) || 1,
      default: 1,
    },
  ]

  async run() {
    const {args, flags} = this.parse(Create)
    this.log(JSON.stringify(args))
    this.log(JSON.stringify(flags))
    this.log('Your pizza is ready!')
  }
}
