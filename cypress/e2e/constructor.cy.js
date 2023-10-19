import '@4tw/cypress-drag-drop'

describe('constructor', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.intercept("GET", "api/ingredients", {fixture: "ingredients.json"})

        cy.get('li[class^="IngredientsCards"]').as('ingredients')
        cy.get('@ingredients').should('have.length', 15)
        cy.get('@ingredients').first().as('bun')
        cy.get('@ingredients').eq(4).as('main')
        cy.get('@ingredients').last().as('sauce')

        cy.get('section[class^="dropZone"]').as('dropZone')
        cy.get('@bun').drag('@dropZone')
        cy.get('@main').drag('@dropZone')
        cy.get('@sauce').drag('@dropZone')

    })



    it('switch Constructor Orders', () => {
        cy.get('a[class^="OrdersLink"]')
            .filter(':contains("Лента заказов")').as('buttonOrders')
        cy.get('@buttonOrders').click()
        cy.contains('Лента заказов');

        cy.get('a[class^="ConstructorLink"]').as('buttonConstructor')
        cy.get('@buttonConstructor').click()
        cy.contains('Соберите бургер');

    })

    it('add ingridients in constructor', () => {

        cy.get('div[class^=constructor-element]').as('orderIngridients')
        cy.get('@orderIngridients').should('have.length', 4)
        cy.get('div[class^=constructor-element]')
            .first()
            .contains('Ингредиент 1 (верх)')

        cy.get('div[class^=constructor-element]')
            .last()
            .contains('Ингредиент 1 (низ)')

        cy.get('div[class^=constructor-element]')
            .eq(1)
            .contains('Ингредиент 9')

        cy.get('div[class^=constructor-element]')
            .eq(2)
            .contains('Ингредиент 15')

        cy.get('button').contains('Оформить заказ').click()


        cy.get('input[name=email]').type(`${"graf@gmail.com"}`)
        cy.get('input[name=password]').type(`${"123456"}`)
        cy.get('Button').click()
        cy.intercept("POST", "api/auth/login", { fixture: "login.json" })

        cy.get('button').contains('Оформить заказ').click()
        cy.intercept("POST", "api/orders", { fixture: "order.json" }).as('order')


        cy.get('h2[class^=OrderDetailsTitle]').contains('777')
    })


})
