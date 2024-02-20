export const menuSidebar = [
    {
        label: 'Inicio',
        items: [
            {
                label: 'Mi Panel',
                icon: 'pi pi-table',
                command: () => { window.location.replace('/dashboard') }
            },

        ],

    },
    {
        label: 'Opciones',
        items: [
            {
                label: 'Categorias',
                icon: 'pi pi-list',
                command: () => { window.location.replace('/categories') }
            },
            {
                label: 'Registro Movimientos',
                icon: 'pi pi-calculator',
                command: () => { window.location.replace('/last-records') }
            }
        ]
    },

];