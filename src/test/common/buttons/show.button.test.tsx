import React from 'react';
import { shallow, mount } from 'enzyme';
import { ListContext } from '../../../context/ListContext';
import ShowButton from '../../../common/buttons/show.button';

describe('Test on <ShowButton />', () => {

    test(
        `It should render the component: 
            1) The title should be 'Show more +'
            2) The type should be 'MORE'`, 
        () => {

        // expecific props values
        const title = 'Show more +'
        const type = 'MORE'

        // expecific context initial values
        const count: number = 3
        const listSearched: any = []
        const setCount = jest.fn() 
        const setAddrType = jest.fn() 
        const setInternalLabel = jest.fn()
        const wrapper = mount( 
            <ListContext.Provider value={
                {
                    count, 
                    listSearched, 
                    setCount, 
                    setAddrType, 
                    setInternalLabel,
                }}>
                <ShowButton title={title} type={type}/>
            </ListContext.Provider>
            
            )
        expect( wrapper ).toMatchSnapshot()
    })

    // expecific context initial values
    const count: number = 3
    const listSearched: any = [{"id":33,"name":"Rand","avatar":"https://randomuser.me/api/portraits/men/80.jpg","income":12580},{"id":34,"name":"Kathy","avatar":"https://randomuser.me/api/portraits/women/25.jpg","income":10604},{"id":35,"name":"Susan","avatar":"https://randomuser.me/api/portraits/women/21.jpg","income":13601},{"id":36,"name":"Robin","avatar":"https://randomuser.me/api/portraits/men/37.jpg","income":10021},{"id":37,"name":"Peter","avatar":"https://randomuser.me/api/portraits/men/49.jpg","income":12550},{"id":38,"name":"Diana","avatar":"https://randomuser.me/api/portraits/women/70.jpg","income":10603},{"id":39,"name":"Richard","avatar":"https://randomuser.me/api/portraits/lego/6.jpg","income":12018}]
    const setCount = jest.fn() 
    const setAddrType = jest.fn() 
    const setInternalLabel = jest.fn()

    test(
        `It should incrment count 3: 
            1) The title should be 'Show more +'
            2) The type should be 'MORE'`, 
        () => {

        // expecific props values
        const title = 'Show more +'
        const type = 'MORE'

        
        const wrapper = mount( 
            <ListContext.Provider value={
                {
                    count, 
                    listSearched, 
                    setCount, 
                    setAddrType, 
                    setInternalLabel,
                }}>
                <ShowButton title={title} type={type}/>
            </ListContext.Provider>
            
            )

        const seeMore = wrapper.find('button').at(0)
        seeMore.simulate('click')

        expect( setCount ).toHaveBeenCalledTimes(1)
        expect( setAddrType ).toHaveBeenCalledTimes(1)
        expect( setInternalLabel ).toHaveBeenCalledTimes(1)
        expect( setCount ).toHaveBeenCalledWith(6)
    })

    test(
        `It should decrement count 3: 
            1) The title should be 'Show less -'
            2) The type should be 'LESS'`, 
        () => {

        // expecific props values
        const title = 'Show less -'
        const type = 'LESS'
        const wrapper = mount( 
            <ListContext.Provider value={
                {
                    count, 
                    listSearched, 
                    setCount, 
                    setAddrType, 
                    setInternalLabel,
                }}>
                <ShowButton title={title} type={type}/>
            </ListContext.Provider>
            
            )

        const seeLess = wrapper.find('button').at(0)
        seeLess.simulate('click')

        expect( setCount ).toHaveBeenCalledTimes(1)
        expect( setAddrType ).toHaveBeenCalledTimes(0)
        expect( setInternalLabel ).toHaveBeenCalledTimes(0)
        expect( setCount ).toHaveBeenCalledWith(3)
    })

})
