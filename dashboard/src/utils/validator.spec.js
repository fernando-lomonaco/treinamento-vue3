import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators util', () => {
  it('should give an error with empty parameter', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 character parameter', () => {
    expect(validateEmptyAndLength3('xp')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('should return true when pass a correct param', () => {
    expect(validateEmptyAndLength3('xpto')).toBe(true)
  })

  it('should give an error with empty emailparameter', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('shoud give an error with a invalid email', () => {
    expect(validateEmptyAndEmail('nenem@@')).toBe('*Este campo precisa ser um e-mail válido')
  })

  it('should return true when a valid email', () => {
    expect(validateEmptyAndEmail('xpto@xp.com.br')).toBe(true)
  })
})
