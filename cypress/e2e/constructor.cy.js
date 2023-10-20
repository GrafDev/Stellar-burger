import '@4tw/cypress-drag-drop'

describe('constructor', () => {

    beforeEach(() => {
        cy.visit('')
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"})

        cy.get('li[class^="IngredientsCards"]').as('ingredients')
        cy.get('@ingredients').should('have.length', 15)
        cy.get('@ingredients').first().as('bun')
        cy.get('@ingredients').eq(4).as('main')
        cy.get('@ingredients').last().as('sauce')
        cy.get('section[class^="dropZone"]').as('dropZone')


    })


//првоеряем открывается ли страница с конструктором
    it('switch Constructor Orders', () => {
        cy.get('a[class^="OrdersLink"]')
            .filter(':contains("Лента заказов")').as('buttonOrders')
        cy.get('@buttonOrders').click()
        cy.contains('Лента заказов');

        cy.get('a[class^="ConstructorLink"]').as('buttonConstructor')
        cy.get('@buttonConstructor').click()
        cy.contains('Соберите бургер');

    })

    it('check  constructor', () => {

        cy.get('@bun').drag('@dropZone')
        cy.get('@main').drag('@dropZone')
        cy.get('@sauce').drag('@dropZone')

        cy.get('div[class^=constructor-element]').as('orderIngridients')
        cy.get('@orderIngridients').should('have.length', 4)
        cy.get('@orderIngridients')
            .first()
            .contains('Ингредиент 1 (верх)')

        cy.get('@orderIngridients')
            .last()
            .contains('Ингредиент 1 (низ)')

        cy.get('@orderIngridients')
            .eq(1)
            .contains('Ингредиент 9')

        cy.get('@orderIngridients')
            .eq(2)
            .contains('Ингредиент 15')

        cy.get('button').contains('Оформить заказ').click()

//проводим автоизацию
        cy.get('input[name=email]').type(`${"graf@gmail.com"}`)
        cy.get('input[name=password]').type(`${"123456"}`)
        cy.get('Button').click()
        cy.intercept("POST", "api/auth/login", { fixture: "login.json" })
// Делаем заказ проверяем и закрываем
        cy.get('button').contains('Оформить заказ').click()
        cy.intercept("POST", "api/orders", { fixture: "order.json" }).as('order')
        cy.get('h2[class^=OrderDetailsTitle]').contains('777')
        cy.get('div[class^=CloseModal]').click()
// Вызыываем модельное окно ингредиента
        cy.get('@bun').click()
        cy.contains('Детали ингредиента');
        cy.contains('Калории,ккал');
        cy.contains('420');
        cy.contains('Белки, г');
        cy.contains('80');
        cy.contains('Жиры, г');
        cy.contains('24');
        cy.contains('Углеводы, г');
        cy.contains('53');
        cy.get('div[class^=CloseModal]').click()


    })


})
