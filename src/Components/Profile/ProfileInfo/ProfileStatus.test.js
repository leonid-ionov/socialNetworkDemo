import React from 'react'
import ProfileStatus from './ProfileStatus'
import { mount } from 'enzyme'
import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
describe('ProfileStatus component', () => {
    test('status from props should be in state', () => {
        const component = Enzyme.shallow(<ProfileStatus status={'new status'}/>),
        setState = jest.fn(),
        useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((status) => [status='new status', setState]);
        expect(component.status).toBe('new status')
    })
})