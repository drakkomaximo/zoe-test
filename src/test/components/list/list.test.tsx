import React from 'react';
import { shallow, mount } from 'enzyme';
import { List } from "../../../components/list";
import { ListContext } from '../../../context/ListContext';

describe('Test on <List />', () => {

    test(
        `It should render the component with the error message correctly: 
            1) if the context value (listSearched) is equals an empty array
            2) if the context value (valueSearched) is equals a number`, 
        () => {

        // expecifict context initial values
        const listSearched: any = []
        const valueSearched: number = 10000
        const wrapper = mount( 
            <ListContext.Provider value={
                {
                    listSearched,
                    valueSearched
                }}>
                <List />
            </ListContext.Provider>
            
            )
        expect( wrapper ).toMatchSnapshot()
    })

    // global context initial values
    const listSearched: any = [{"id":33,"name":"Rand","avatar":"https://randomuser.me/api/portraits/men/80.jpg","income":12580},{"id":34,"name":"Kathy","avatar":"https://randomuser.me/api/portraits/women/25.jpg","income":10604},{"id":35,"name":"Susan","avatar":"https://randomuser.me/api/portraits/women/21.jpg","income":13601},{"id":36,"name":"Robin","avatar":"https://randomuser.me/api/portraits/men/37.jpg","income":10021},{"id":37,"name":"Peter","avatar":"https://randomuser.me/api/portraits/men/49.jpg","income":12550},{"id":38,"name":"Diana","avatar":"https://randomuser.me/api/portraits/women/70.jpg","income":10603},{"id":39,"name":"Richard","avatar":"https://randomuser.me/api/portraits/lego/6.jpg","income":12018}]
    const valueSearched: number = 20000
    const addrtype: string = 'Select...'
    let count: number = 3

    test(
        `It should render the component correctly Part1: 
            1) if the context value (listSearched) have values
            2) if the context value (valueSearched) is equals a number
            3) if the context value (addrtype) is equals a Select...
            4) if the context value (count) is equals a 3`, 
        () => {

        
        const wrapper = mount( 
            <ListContext.Provider value={
                {
                    listSearched,
                    valueSearched,
                    addrtype,
                    count
                }}>
                <List />
            </ListContext.Provider>
            
            )
        expect( wrapper ).toMatchSnapshot()
    })

    test(
        `It should render the component correctly Part2: 
            1) if the context value (listSearched) have values
            2) if the context value (valueSearched) is equals a number
            3) if the context value (addrtype) is equals a Select...
            4) if the context value (count) is equals a 3
            5) if the user click 1 times the botton (see more), The list of Agents increment 3 
            5) if the user click 1 times the botton (see less), The list of Agents decrement 3`, 
        () => {
 
        const setCount = jest.fn()
        const setAddrType = jest.fn()
        const setInternalLabel = jest.fn()
        const wrapper = mount( 
            <ListContext.Provider value={
                {
                    listSearched,
                    valueSearched,
                    addrtype,
                    count,
                    setCount,
                    setAddrType,
                    setInternalLabel
                }}>
                <List />
            </ListContext.Provider>
            
            )

        const seeMore = wrapper.find('button').at(1)
        seeMore.simulate('click')
        
        expect( setCount ).toHaveBeenCalledTimes(1)
        expect( setAddrType ).toHaveBeenCalledTimes(1)
        expect( setInternalLabel ).toHaveBeenCalledTimes(1)
        expect( setCount ).toHaveBeenCalledWith(6)
        expect( setAddrType ).toHaveBeenCalledWith('Select...')
        expect( setInternalLabel ).toHaveBeenCalledWith('Select...')

        const seeLess = wrapper.find('button').at(0)
        seeLess.simulate('click')

        expect( setCount ).toHaveBeenCalledWith(3)
        expect( setAddrType ).toHaveBeenCalledWith('Select...')
        expect( setInternalLabel ).toHaveBeenCalledWith('Select...')

    })

})
