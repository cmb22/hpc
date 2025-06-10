import { useEffect, useState } from 'react'
import { get } from 'lodash'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card } from '../components/ui/card'
import { Select } from '../components/ui/select'
import { Textarea } from '../components/ui/textarea'
import { ErrorMessage } from '../components/ui/errorMessage'
import { datasetIdValidation, priorityValidation } from '../utils/validation'
import styles from './HPC.module.css'

const analysisParams = {
    A: ['a1', 'a2', 'a3'],
    B: ['b1', 'b2', 'b3'],
    C: ['c1', 'c2', 'c3'],
}

type TAnalysisType = keyof typeof analysisParams

type TJobPayload = {
    analysisType?: TAnalysisType;
    parameters?: Record<string, string>;
    datasetIds?: Array<number>,
    priority?: number;
}

// TODO: Export all Text entries to constants file
// Consolidate all Form Fields into one useState / or implement Reack Hook Form.

export const HPC = () => {
    const [analysisType, setAnalysisType] = useState<TAnalysisType>('A')
    const [parameters, setParameters] = useState<Record<string, string>>(Object.fromEntries(analysisParams["A"].map((key) => [key, ''])))

    const [datasetIds, setDatasetIds] = useState<string>('')
    const [priority, setPriority] = useState('0.5')
    const [error, setError] = useState<Record<string, string>>({})

    // Reset error on any changes in form
    useEffect(() => {
        setError({})
    }, [analysisType, parameters, datasetIds, priority])

    // Reset parameters when analysis type changes
    useEffect(() => {
        const defaultParams = Object.fromEntries(
            analysisParams[analysisType].map((key) => [key, ''])
        )
        setParameters(defaultParams)

    }, [analysisType])

    const handleParamChange = (key: string, value: string) => {
        setParameters((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const jobPayload: TJobPayload = {
            analysisType,
            parameters,
        }
        const errors: Record<string, string> = {}

        // Validation
        // TODO Validate the other 2 fields

        // Validate datasetIds
        const datasetIdsSplit = datasetIds.split(',').map(id => Number(id.trim()))
        const isInvalidDatasetIds = datasetIdValidation(datasetIdsSplit)
        if (isInvalidDatasetIds) {
            errors.datasetIds = isInvalidDatasetIds
        }
        // If validation passes, assign to jobPayload
        else {
            jobPayload.datasetIds = datasetIdsSplit
        }

        // Validate priority
        const isInvalidPriority = priorityValidation(priority)
        if (isInvalidPriority) {
            errors.priority = isInvalidPriority
        }
        // If validation passes, assign to jobPayload 
        else {
            jobPayload.priority = parseFloat(priority)
        }

        if (Object.keys(errors).length) {
            console.log('Form has errors:', errors)
            setError(errors)
            return

        }
        // If no errors, proceed with job submission
        // TODO: API call to be called to submit query to DB.
        console.log('Submitting job:', jobPayload)
    }


    const currentParams = analysisParams[analysisType]

    return (
        <form className={styles.appContainer} onSubmit={handleSubmit}>
            <Card>
                <h2 className={styles.cardTitle}>Start Analysis Job</h2>

                <div className={styles.formGroup}>
                    <Label>Analysis Type</Label>
                    <Select
                        value={analysisType}
                        onChange={(e) => {
                            const val = e.target.value as TAnalysisType
                            setAnalysisType(val)
                        }}
                    >
                        <option value="A">Analysis A</option>
                        <option value="B">Analysis B</option>
                        <option value="C">Analysis C</option>
                    </Select>
                </div>

                <div className={styles.paramGrid}>
                    {currentParams.map((param) => (
                        <div key={param}>
                            <Label>{param}</Label>
                            <Input
                                type="string"
                                value={parameters[param] || ''}
                                onChange={(e) => handleParamChange(param, e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.formGroup}>
                    <Label>Dataset UUIDs</Label>
                    <Textarea
                        rows={2}
                        value={datasetIds}
                        onChange={(e) => setDatasetIds(e.target.value)}
                    />
                </div>
                <ErrorMessage error={get(error, "datasetIds")} />

                <div className={styles.formGroup}>
                    <Label>Priority (0.0 - 1.0)</Label>
                    <Input
                        type="number"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    />
                </div>
                <ErrorMessage error={get(error, "priority")} />

                <Button type="submit">Submit Job</Button>
            </Card>
        </form>
    )
}