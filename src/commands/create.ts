/* eslint-disable no-await-in-loop */
import {Command, flags} from '@oclif/command'
import {prompt} from 'inquirer'
import {SingleBar, Presets} from 'cli-progress'
import {yellow, green, cyan} from 'chalk'
import {sleep} from '../lib/util'

interface PizzaData {
  crust: string;
  toppings: string[];
  extraSauce: boolean;
  count: number;
}

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
    extraSauce: flags.boolean({char: 'x', description: 'Do you want extra sauce?'}),
  }

  static args = [
    {
      name: 'count',
      required: false,
      description: 'How many pizza you want to create',
      parse: (input: string) => parseInt(input, 10) || null,
      default: null,
    },
  ]

  async getInteractiveArgs() {
    const answer = await prompt([
      {
        type: 'number',
        name: 'count',
        message: 'How many pizza you want to create',
        default: 1,
        validate(value) {
          if (isNaN(parseInt(value, 10))) {
            return 'Pizza count should be a number'
          }
          return true
        },
      },
      {
        type: 'list',
        name: 'crust',
        message: 'How do you want you pizza crust be?',
        default: 'Thin',
        choices: ['Thin', 'Thick'],
      },
      {
        type: 'checkbox',
        name: 'toppings',
        message: 'What do you want to add as toppings?',
        default: '',
        choices: [
          {
            name: '🍖 Pepperoni',
            value: 'pepperoni',
          },
          {
            name: '🍄 Mushroom',
            value: 'mushroom',
          },
          {
            name: '🥓 Bacon',
            value: 'bacon',
          },
          {
            name: '🍍 Pineapple',
            value: 'pineapple',
          },
        ],
        validate(value) {
          if (value.length === 0) {
            return 'You should add at least 1 topping'
          }
          return true
        },
      },
      {
        type: 'confirm',
        name: 'extraSauce',
        message: 'Do you want extra sauce?',
        default: false,
      },
    ])

    return answer
  }

  async makePizza(pizzaData: PizzaData) {
    const {crust, toppings, extraSauce, count} = pizzaData

    this.log(yellow('Order taken! Making your 🍕!'))

    const progressBar = new SingleBar({
      format: `Pizza Progress | ${cyan('{bar}')} | {percentage}% | ETA: {eta}s`,
    }, Presets.shades_classic)

    progressBar.start((count * toppings.length), 0)

    // Create pizza to count
    const pizzaToMake = new Array(count).fill({crust, toppings, extraSauce})
    for (const pizza of pizzaToMake) {
      await sleep(1000)

      for (const _ of pizza.toppings) {
        progressBar.increment()
        await sleep(1000)
      }

      if (pizza.extraSauce) {
        await sleep(1000)
      }
    }

    progressBar.stop()
  }

  async run() {
    this.log(green('Welcome to the 🍕 Maker!'))
    const {args, flags} = this.parse(Create)
    const {count} = args
    const {toppings, crust, extraSauce} = flags
    let pizzaData: PizzaData
    if (count !== null && count > 0 && toppings.length > 0 && crust) {
      pizzaData = {count, toppings, crust, extraSauce}
    } else {
      pizzaData = await this.getInteractiveArgs()
    }

    await this.makePizza(pizzaData)

    this.log(green('Your 🍕 is ready!'))
  }
}
