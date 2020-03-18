import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tab from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabContents from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
                <Content>
                    <Tab>
                        <TabsHeader>
                            <TabHeader icon='bars' label='Listar' target='tabList'/>
                            <TabHeader icon='plus' label='Incluir' target='tabCreate'/>
                            <TabHeader icon='edit' label='Alterar' target='tabUpdate'/>
                            <TabHeader icon='trash-o' label='Excluir' target='tabDelete'/>
                        </TabsHeader>
                        <TabContents>
                            <TabContent id='tabList'>
                                Tab List
                            </TabContent>
                            <TabContent id='tabCreate'>
                                Tab tabCreate
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                Tab tabUpdate
                            </TabContent>
                            <TabContent id='tabDelete'>
                                Tab tabDelete
                            </TabContent>
                        </TabContents>
                    </Tab>
                </Content>
            </div>
        )
    }
}

export default BillingCycle