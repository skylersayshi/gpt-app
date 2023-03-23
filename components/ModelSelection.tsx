'use client'
import React from 'react'
import useSWR from 'swr'
import Select from 'react-select'

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {
const {data: models, isLoading} = useSWR('models', fetchModels)
const {data: model, mutate: setModel} = useSWR('model', {
    fallbackData: 'text-davinci-003'
})

const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#71717a" : "#f4f4f5",
      backgroundColor: state.isSelected ? "#f3f4f6" : "#71717a",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#27272a",
      padding: "10px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};


  return (
    <div className='m-2'>
        <Select
            className='mt-2'
            options={models?.modelOptions}
            defaultValue={model}
            placeholder={model}
            isSearchable
            isLoading={isLoading}
            menuPosition='fixed'
            classNames={{
                option: (state) => "hover:bg-zinc-900"
            }}
            styles={customStyles}
            onChange={(e)=> setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection