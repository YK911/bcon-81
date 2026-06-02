/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return { id: this.transactions.length + 1, amount, type };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    const currentTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );
    this.transactions.push(currentTransaction);
    this.balance += amount;
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);

    if (amount > this.balance) {
      alert(`Sum ${amount} larger then your balance`);
      return;
    }

    this.balance -= amount;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        console.log(
          `Operation ${id}:\nType: ${transaction.type}\nAmount: ${transaction.amount}`
        );
        return;
      }
    }

    console.log(`Operation ${id} not found 🥲`);
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    if (this.transactions.length === 0) {
      console.log("Nothing to show");
      return;
    }

    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }

    console.log(`Total ${type}: ${total}`);
  },
};

const currentBalance = account.getBalance();
console.log("🚀 ~ currentBalance:", currentBalance);
account.deposit(1000);
account.deposit(300);
account.deposit(50);

const currentBalance1 = account.getBalance();
console.log("🚀 ~ currentBalance1:", currentBalance1);

account.withdraw(50);
account.withdraw(400);
account.withdraw(500);

const currentBalance2 = account.getBalance();
console.log("🚀 ~ currentBalance2:", currentBalance2);

// account.withdraw(500);

account.getTransactionDetails(2);
account.getTransactionDetails(12);

account.getTransactionTotal(Transaction.WITHDRAW);
account.getTransactionTotal(Transaction.DEPOSIT);

class Account {
  constructor(balance) {
    this.balance = balance;
    this.transactions = [];
  }
}

// const mangoAccount = new Account(100);
// console.log("🚀 ~ mangoAccount:", mangoAccount);
// const polyAccount = new Account(400);
// console.log("🚀 ~ polyAccount:", polyAccount);
// const ajaxAccount = new Account(10_000);
// console.log("🚀 ~ ajaxAccount:", ajaxAccount);
