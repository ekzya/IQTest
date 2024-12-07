import { useState } from 'react'
import { Brain, Trophy, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { BsExclamationLg } from 'react-icons/bs'
import html2canvas from 'html2canvas'

const questions = [
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '2, 6, 12, 20, ',
    insert: '?',
    options: ['28', '30', '36', '42'],
    correctAnswer: 1,
    level: 3, 
  },
  {
    question: 'Какое слово не подходит к остальным?',
    example: 'Кошка, Собака, Птица, Лошадь',
    options: ['Кошка', 'Собака', 'Птица', 'Лошадь'],
    correctAnswer: 2,
    level: 3, 
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '1, 4, 9, 16, ',
    insert: '?',
    options: ['20', '25', '30', '36'],
    correctAnswer: 1,
    level: 3, 
  },
  {
    question: 'Какое слово не подходит к остальным?',
    example: 'Красный, Синий, Треугольник, Зеленый',
    options: ['Красный', 'Синий', 'Треугольник', 'Зеленый'],
    correctAnswer: 2,
    level: 3, 
  },
  {
    question: 'Сколько ног у 2 кошек и 3 собак?',
    options: ['14', '16', '20', '24'],
    correctAnswer: 2,
    level: 2,
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '3, 5, 8, 12, 17, ',
    insert: '?',
    options: ['22', '23', '25', '28'],
    correctAnswer: 1,
    level: 3, 
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '2, 3, 5, 7, 11, ',
    insert: '?',
    options: ['12', '13', '14', '15'],
    correctAnswer: 1,
    level: 4, 
  },
  {
    question: 'Какое слово не подходит к остальным?',
    example: 'Яблоко, Банан, Автомобиль, Апельсин',
    options: ['Яблоко', 'Банан', 'Автомобиль', 'Апельсин'],
    correctAnswer: 2,
    level: 3, 
  },
  {
    question: 'Что лишнее?',
    example: '125, 64, 36, 16',
    options: ['125', '64', '36', '16'],
    correctAnswer: 0,
    level: 3, 
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '1, 2, 6, 24, 120, ',
    insert: '?',
    options: ['480', '540', '720', '900'],
    correctAnswer: 2,
    level: 4, 
  },
  {
    question: 'Какое слово не подходит к остальным?',
    example: 'Круг, Квадрат, Линия, Треугольник',
    options: ['Круг', 'Квадрат', 'Линия', 'Треугольник'],
    correctAnswer: 2,
    level: 3,
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '5, 10, 15, 25, 40, ',
    insert: '?',
    options: ['55', '60', '65', '70'],
    correctAnswer: 0,
    level: 4, 
  },
  {
    question: 'Найдите пропущенную букву.',
    example: 'A, B, D, E, ',
    insert: '?',
    options: ['C', 'F', 'G', 'H'],
    correctAnswer: 2,
    level: 2, 
  },
  {
    question: 'Какое слово не подходит к остальным?',
    example: 'Весна, Осень, Лето, Север',
    options: ['Весна', 'Осень', 'Лето', 'Север'],
    correctAnswer: 3,
    level: 2, 
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '50, 45, 40, 35, ',
    insert: '?',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1,
    level: 3, 
  },
  {
    question: 'Что лишнее?',
    example: 'Солнце, Земля, Марс, Луна',
    options: ['Солнце', 'Земля', 'Марс', 'Луна'],
    correctAnswer: 3,
    level: 2, 
  },
  {
    question: 'Какое слово не подходит к остальным?',
    example: 'Москва, Париж, Лондон, Байкал',
    options: ['Москва', 'Париж', 'Лондон', 'Байкал'],
    correctAnswer: 3,
    level: 3, 
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '1, 1, 2, 3, 5, ',
    insert: '?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    level: 3, 
  },
  {
    question: 'Какое слово не подходит к остальным?',
    example: 'Слон, Тигр, Лев, Акула',
    options: ['Слон', 'Тигр', 'Лев', 'Акула'],
    correctAnswer: 3,
    level: 3, 
  },
  {
    question: 'Какое число должно стоять вместо вопросительного знака?',
    example: '100, 90, 81, 73, ',
    insert: '?',
    options: ['64', '65', '66', '67'],
    correctAnswer: 3,
    level: 3, 
  },
]



function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [hideMainBlock, setHideMainBlock] = useState(false)
	const [selectedAnswers, setSelectedAnswers] = useState(
		Array(questions.length).fill(null)
	)
	const [showResults, setShowResults] = useState(false)
	const [showStart, setShowStart] = useState(true)

	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1)
		} else {
			setHideMainBlock(true)
			setTimeout(() => {
				setShowResults(true)
			
			}, 600)
		}
	}

	const calculateScore = () => {
		let levelscore = 0
		let score = 0

		selectedAnswers.forEach((answer, index) => {
			const correctAnswer = questions[index].correctAnswer
			const isCorrect = answer === correctAnswer

			console.log(`Вопрос: ${questions[index].question}`)
			console.log(`Ваш ответ: ${questions[index].options[answer]}`)
			console.log(
				`Правильный ответ: ${questions[index].options[correctAnswer]}`
			)
			console.log(isCorrect ? 'Ответ правильный' : 'Ответ неправильный')
			console.log('---')

			if (isCorrect) {
				score += 1
				levelscore += questions[index].level
			}
		})

		return [score, levelscore] 
	}

	const handleAnswerSelect = index => {
		const updatedAnswers = [...selectedAnswers]
		updatedAnswers[currentQuestion] = index
		setSelectedAnswers(updatedAnswers)
	}

	if (showStart) {
		return (
			<div className='h-screen h-safe flex items-center justify-center bg-[#0A0908] text-white '>
				<div className='font-nunito max-w-[400px] w-[90vw] bg-[#080808] flex flex-col justify-between items-center rounded-lg p-6 '>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.2 }}
					>
						<div className='flex flex-col items-center justify-center font-bold'>
							<div className='flex flex-col justify-center items-center'>
								<div className='mb-4'>
									<Brain className='w-16 h-16 text-white' />
								</div>
								<div className='flex justify-center items-center '>
									<p className='text-2xl first-letter:uppercase'>теcт на </p>
									<div className='ml-1.5 bg-black h-11 flex justify-center items-center rounded-md -rotate-3 px-1'>
										<svg
											className='w-14 h-14'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 710 350'
										>
											<path
												fill='#fff'
												d='M505.782 49.986c3.253-13.421 22.337-13.421 25.59 0l8.952 36.929a13.168 13.168 0 009.692 9.695l36.92 8.955c13.418 3.254 13.418 22.342 0 25.596l-36.92 8.955a13.171 13.171 0 00-9.692 9.695l-8.952 36.929c-3.253 13.422-22.337 13.422-25.59 0l-8.952-36.929a13.174 13.174 0 00-9.694-9.695l-36.918-8.955c-13.418-3.254-13.418-22.342 0-25.596l36.918-8.955a13.17 13.17 0 009.694-9.695l8.952-36.93zM613.255 178.864c2.003-8.259 13.746-8.259 15.748 0l5.51 22.726a8.102 8.102 0 005.964 5.966l22.72 5.51c8.257 2.003 8.257 13.749 0 15.752l-22.72 5.511a8.104 8.104 0 00-5.964 5.966l-5.51 22.726c-2.002 8.259-13.745 8.259-15.748 0l-5.508-22.726a8.106 8.106 0 00-5.965-5.966l-22.72-5.511c-8.257-2.003-8.257-13.749 0-15.752l22.72-5.51a8.105 8.105 0 005.965-5.966l5.508-22.726zM652.158 48.51c1.314-5.42 9.02-5.42 10.334 0l3.616 14.914a5.315 5.315 0 003.914 3.915l14.91 3.617c5.418 1.314 5.418 9.023 0 10.337l-14.91 3.616a5.315 5.315 0 00-3.914 3.915l-3.616 14.914c-1.314 5.42-9.02 5.42-10.334 0l-3.616-14.913a5.318 5.318 0 00-3.914-3.916l-14.91-3.616c-5.418-1.314-5.418-9.023 0-10.337l14.91-3.617a5.318 5.318 0 003.914-3.915l3.616-14.914z'
											/>
											<path
												fill='#fff'
												fill-rule='evenodd'
												d='M657.325 51.156l-2.951 12.173a13.369 13.369 0 01-9.841 9.844l-12.17 2.951 12.17 2.952a13.369 13.369 0 019.841 9.844l2.951 12.172 2.951-12.172a13.369 13.369 0 019.841-9.844l12.169-2.952-12.169-2.951a13.369 13.369 0 01-9.841-9.844l-2.951-12.173zm5.906-6.59c-1.502-6.195-10.31-6.195-11.811 0l-4.133 17.044a6.076 6.076 0 01-4.473 4.474l-17.04 4.133c-6.193 1.502-6.193 10.312 0 11.814l17.04 4.133a6.077 6.077 0 014.473 4.475l4.133 17.044c1.501 6.194 10.309 6.194 11.811 0l4.131-17.044a6.078 6.078 0 014.474-4.475l17.039-4.133c6.193-1.502 6.193-10.312 0-11.814l-17.039-4.133a6.078 6.078 0 01-4.474-4.474l-4.131-17.044z'
												clip-rule='evenodd'
											/>
											<path
												fill='#fff'
												d='M512.545 281.283c-6.665 0-12.066-5.403-12.066-12.067 0-6.666 5.401-12.069 12.066-12.069 6.663 0 12.064 5.403 12.064 12.069 0 6.664-5.401 12.067-12.064 12.067zM452.219 233.01c-6.663 0-12.065-5.402-12.065-12.067s5.402-12.069 12.065-12.069c6.664 0 12.065 5.404 12.065 12.069 0 6.665-5.401 12.067-12.065 12.067zM584.934 39.92c-6.663 0-12.064-5.403-12.064-12.068 0-6.666 5.401-12.069 12.064-12.069 6.664 0 12.066 5.403 12.066 12.069 0 6.665-5.402 12.068-12.066 12.068zM693.52 172.67c-6.664 0-12.065-5.403-12.065-12.069 0-6.665 5.401-12.068 12.065-12.068 6.663 0 12.065 5.403 12.065 12.068 0 6.666-5.402 12.069-12.065 12.069zM329.94 314.94c3.547 5.573 4.94 10.64 4.18 15.2-.76 4.56-2.787 8.36-6.08 11.4-3.293 3.293-7.347 5.32-12.16 6.08-4.813 1.013-9.627.507-14.44-1.52-4.813-1.773-8.867-5.32-12.16-10.64l-26.22-42.18c-3.547-5.827-8.36-10.26-14.44-13.3-5.827-2.787-13.047-4.18-21.66-4.18l37.62-14.82c11.907 0 21.407 2.153 28.5 6.46 7.093 4.053 13.933 11.273 20.52 21.66l16.34 25.84zm-102.6-39.14c-25.84 0-48.513-5.7-68.02-17.1-19.253-11.4-34.2-27.36-44.84-47.88-10.64-20.773-15.96-45.093-15.96-72.96 0-21.027 3.04-39.9 9.12-56.62 6.08-16.973 14.693-31.413 25.84-43.32 11.4-12.16 24.953-21.407 40.66-27.74C190.1 3.593 207.833.3 227.34.3c26.093 0 48.767 5.7 68.02 17.1 19.253 11.147 34.2 26.98 44.84 47.5s15.96 44.713 15.96 72.58c0 21.027-3.04 40.027-9.12 57-6.08 16.973-14.82 31.54-26.22 43.7-11.147 12.16-24.7 21.533-40.66 28.12-15.707 6.333-33.313 9.5-52.82 9.5zm0-41.8c16.467 0 30.4-3.8 41.8-11.4 11.653-7.6 20.52-18.62 26.6-33.06 6.333-14.44 9.5-31.667 9.5-51.68 0-30.4-6.84-53.96-20.52-70.68-13.427-16.72-32.553-25.08-57.38-25.08-16.213 0-30.147 3.8-41.8 11.4-11.653 7.347-20.647 18.24-26.98 32.68-6.08 14.187-9.12 31.413-9.12 51.68 0 30.147 6.84 53.707 20.52 70.68 13.68 16.973 32.807 25.46 57.38 25.46zM53.58 281.04c-7.853 0-13.933-2.153-18.24-6.46-4.053-4.56-6.08-10.767-6.08-18.62V32.14c0-8.107 2.027-14.313 6.08-18.62 4.307-4.307 10.387-6.46 18.24-6.46 7.853 0 13.807 2.153 17.86 6.46 4.307 4.307 6.46 10.513 6.46 18.62v223.82c0 7.853-2.027 14.06-6.08 18.62-4.053 4.307-10.133 6.46-18.24 6.46z'
											/>
										</svg>
									</div>
								</div>
							</div>
							<p className='font-bold text-gray-400 my-1'>
								Проверьте свой интеллект
							</p>
						</div>
						<div className='text-center mt-6 mb-8  py-3 rounded-lg'>
							<div className='flex items-center justify-center gap-2 text-white mb-3'>
								<Trophy size={20} />
								<p>{questions.length} вопросов</p>
							</div>
							<p className='text-gray-400 text-[15px] leading-relaxed'>
								Этот тест состоит из {questions.length} вопросов. На каждый
								вопрос дается 4 варианта ответа. Выберите тот, который считаете
								правильным.
							</p>
						</div>
						<div className='flex items-center w-full'>
							<button
								onClick={() => {
									setShowStart(false)
									document.title = 'Вопрос 1'
								}}
								className='bg-white text-[#0A0908] font-bold text-xl rounded-lg w-full outline-none py-2 transition-all duration-300 shadow-[0px_0px_15px_-2px] hover:brightness-100 brightness-100 hover:shadow-white shadow-white md:brightness-75 md:shadow-transparent'
							>
								Начать
							</button>
						</div>
					</motion.div>
				</div>
			</div>
		)
	}

	if (showResults) {
		const [score, levelscore] = calculateScore()
		return (
			<div className='h-screen h-safe flex items-center justify-center bg-[#0A0908] text-white'>
				<div
					className={`h-2 w-full bg-white fixed top-0 left-0 opacity-0 transition-opacity duration-500`}
				></div>
				<motion.div
					id='screenshot-target'
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.2 }}
				>
					<div className='font-nunito max-w-[400px] w-[90vw] bg-[#080808] flex flex-col justify-center items-center rounded-lg p-6 overflow-hidden m-4 '>
						{/* shadow-[inset_0px_0px_0px_4px,_0_3px_10px_-2px] */}
						<div className='w-full'>
							<div>
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.4 }}
								>
									<Trophy className='w-20 h-20 mx-auto text-white  mb-8' />
								</motion.div>
							</div>
							<div className='flex justify-center items-center mb-6'>
								<p className='text-3xl first-letter:uppercase font-bold'>
									теcт на{' '}
								</p>
								<div className='ml-1.5 bg-black h-11 flex justify-center items-center rounded-md -rotate-3 px-1'>
									<svg
										className='w-16 h-16'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 710 350'
									>
										<path
											fill='#fff'
											d='M505.782 49.986c3.253-13.421 22.337-13.421 25.59 0l8.952 36.929a13.168 13.168 0 009.692 9.695l36.92 8.955c13.418 3.254 13.418 22.342 0 25.596l-36.92 8.955a13.171 13.171 0 00-9.692 9.695l-8.952 36.929c-3.253 13.422-22.337 13.422-25.59 0l-8.952-36.929a13.174 13.174 0 00-9.694-9.695l-36.918-8.955c-13.418-3.254-13.418-22.342 0-25.596l36.918-8.955a13.17 13.17 0 009.694-9.695l8.952-36.93zM613.255 178.864c2.003-8.259 13.746-8.259 15.748 0l5.51 22.726a8.102 8.102 0 005.964 5.966l22.72 5.51c8.257 2.003 8.257 13.749 0 15.752l-22.72 5.511a8.104 8.104 0 00-5.964 5.966l-5.51 22.726c-2.002 8.259-13.745 8.259-15.748 0l-5.508-22.726a8.106 8.106 0 00-5.965-5.966l-22.72-5.511c-8.257-2.003-8.257-13.749 0-15.752l22.72-5.51a8.105 8.105 0 005.965-5.966l5.508-22.726zM652.158 48.51c1.314-5.42 9.02-5.42 10.334 0l3.616 14.914a5.315 5.315 0 003.914 3.915l14.91 3.617c5.418 1.314 5.418 9.023 0 10.337l-14.91 3.616a5.315 5.315 0 00-3.914 3.915l-3.616 14.914c-1.314 5.42-9.02 5.42-10.334 0l-3.616-14.913a5.318 5.318 0 00-3.914-3.916l-14.91-3.616c-5.418-1.314-5.418-9.023 0-10.337l14.91-3.617a5.318 5.318 0 003.914-3.915l3.616-14.914z'
										/>
										<path
											fill='#fff'
											fill-rule='evenodd'
											d='M657.325 51.156l-2.951 12.173a13.369 13.369 0 01-9.841 9.844l-12.17 2.951 12.17 2.952a13.369 13.369 0 019.841 9.844l2.951 12.172 2.951-12.172a13.369 13.369 0 019.841-9.844l12.169-2.952-12.169-2.951a13.369 13.369 0 01-9.841-9.844l-2.951-12.173zm5.906-6.59c-1.502-6.195-10.31-6.195-11.811 0l-4.133 17.044a6.076 6.076 0 01-4.473 4.474l-17.04 4.133c-6.193 1.502-6.193 10.312 0 11.814l17.04 4.133a6.077 6.077 0 014.473 4.475l4.133 17.044c1.501 6.194 10.309 6.194 11.811 0l4.131-17.044a6.078 6.078 0 014.474-4.475l17.039-4.133c6.193-1.502 6.193-10.312 0-11.814l-17.039-4.133a6.078 6.078 0 01-4.474-4.474l-4.131-17.044z'
											clip-rule='evenodd'
										/>
										<path
											fill='#fff'
											d='M512.545 281.283c-6.665 0-12.066-5.403-12.066-12.067 0-6.666 5.401-12.069 12.066-12.069 6.663 0 12.064 5.403 12.064 12.069 0 6.664-5.401 12.067-12.064 12.067zM452.219 233.01c-6.663 0-12.065-5.402-12.065-12.067s5.402-12.069 12.065-12.069c6.664 0 12.065 5.404 12.065 12.069 0 6.665-5.401 12.067-12.065 12.067zM584.934 39.92c-6.663 0-12.064-5.403-12.064-12.068 0-6.666 5.401-12.069 12.064-12.069 6.664 0 12.066 5.403 12.066 12.069 0 6.665-5.402 12.068-12.066 12.068zM693.52 172.67c-6.664 0-12.065-5.403-12.065-12.069 0-6.665 5.401-12.068 12.065-12.068 6.663 0 12.065 5.403 12.065 12.068 0 6.666-5.402 12.069-12.065 12.069zM329.94 314.94c3.547 5.573 4.94 10.64 4.18 15.2-.76 4.56-2.787 8.36-6.08 11.4-3.293 3.293-7.347 5.32-12.16 6.08-4.813 1.013-9.627.507-14.44-1.52-4.813-1.773-8.867-5.32-12.16-10.64l-26.22-42.18c-3.547-5.827-8.36-10.26-14.44-13.3-5.827-2.787-13.047-4.18-21.66-4.18l37.62-14.82c11.907 0 21.407 2.153 28.5 6.46 7.093 4.053 13.933 11.273 20.52 21.66l16.34 25.84zm-102.6-39.14c-25.84 0-48.513-5.7-68.02-17.1-19.253-11.4-34.2-27.36-44.84-47.88-10.64-20.773-15.96-45.093-15.96-72.96 0-21.027 3.04-39.9 9.12-56.62 6.08-16.973 14.693-31.413 25.84-43.32 11.4-12.16 24.953-21.407 40.66-27.74C190.1 3.593 207.833.3 227.34.3c26.093 0 48.767 5.7 68.02 17.1 19.253 11.147 34.2 26.98 44.84 47.5s15.96 44.713 15.96 72.58c0 21.027-3.04 40.027-9.12 57-6.08 16.973-14.82 31.54-26.22 43.7-11.147 12.16-24.7 21.533-40.66 28.12-15.707 6.333-33.313 9.5-52.82 9.5zm0-41.8c16.467 0 30.4-3.8 41.8-11.4 11.653-7.6 20.52-18.62 26.6-33.06 6.333-14.44 9.5-31.667 9.5-51.68 0-30.4-6.84-53.96-20.52-70.68-13.427-16.72-32.553-25.08-57.38-25.08-16.213 0-30.147 3.8-41.8 11.4-11.653 7.347-20.647 18.24-26.98 32.68-6.08 14.187-9.12 31.413-9.12 51.68 0 30.147 6.84 53.707 20.52 70.68 13.68 16.973 32.807 25.46 57.38 25.46zM53.58 281.04c-7.853 0-13.933-2.153-18.24-6.46-4.053-4.56-6.08-10.767-6.08-18.62V32.14c0-8.107 2.027-14.313 6.08-18.62 4.307-4.307 10.387-6.46 18.24-6.46 7.853 0 13.807 2.153 17.86 6.46 4.307 4.307 6.46 10.513 6.46 18.62v223.82c0 7.853-2.027 14.06-6.08 18.62-4.053 4.307-10.133 6.46-18.24 6.46z'
										/>
									</svg>
								</div>
							</div>
							<div className='w-full flex flex-col justify-center items-center'>
								<p className='text-lg text-zinc-400 mb-2'>Ваш результат:</p>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
									className='text-4xl sm:text-5xl font-bold'
								>
									{' '}
									<p className='text-4xl sm:text-5xl font-extrabold tracking-tight scale-y-95'>
										{score}{' '}
										<span className='text-zinc-500 '>
											из {questions.length}
										</span>
									</p>
								</motion.div>
								<p className='text-xl text-white font-bold mt-2 text-shadow'>
									{Math.round(
										Math.floor(
											((levelscore -
												questions.reduce((sum, question) => {
													const updatedSum = sum + question.level
													return updatedSum
												}, 0) /
													2) /
												10) *
												15 +
												100
										) / 5
									) * 5}{' '}
									IQ
								</p>
							</div>
							<div>
								<div className='relative h-4 w-full bg-zinc-800 rounded-full overflow-hidden my-6'>
									<motion.div
										initial={{ width: 0 }}
										animate={{
											width: `${(score / questions.length) * 100}%`,
										}}
										transition={{ delay: 0.5, duration: 0.5 }}
										className='absolute top-0 left-0 h-full bg-gradient-to-r from-zinc-50 to-zinc-100'
									/>
								</div>
							</div>
							<div>
								<div>
									<button
										onClick={() => {
											document.title = 'Тест на IQ'
											setCurrentQuestion(0)
											setSelectedAnswers(Array(questions.length).fill(null))
											setShowResults(false)
											setShowStart(true)
											setHideMainBlock(false)
										}}
										className='bg-white text-[#0A0908] font-bold text-xl rounded-lg w-full outline-none py-2 mt-2 transition-all duration-300  shadow-[0px_0px_10px_-2px] hover:brightness-100 brightness-100 hover:shadow-white shadow-white md:brightness-75 md:shadow-transparent'
									>
										Пройти снова
									</button>
								</div>
								<div>
									<button
										className='bg-zinc-800 text-zinc-50  font-bold text-xl rounded-lg w-full outline-none py-2 mt-4 transition-all duration-300  shadow-[0px_0px_15px_-2px] hover:brightness-100 brightness-100 hover:shadow-[#27272a] shadow-[#27272a] md:brightness-75 md:shadow-transparent'
									>
										Поделиться
									</button>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		)
	}

	return (
		<div
			className={`h-screen h-safe flex items-center justify-center bg-[#0A0908] text-white `}
		>
			<div
				className={`h-2 w-0 bg-white fixed after:opacity-20 top-0 left-0  ${
					currentQuestion !== 0 ? 'transition-all duration-300' : ''
				}`}
				style={{
					width: hideMainBlock
						? '100%'
						: `${(currentQuestion * 100) / questions.length}%`,
				}}
			></div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<div
					className={`font-nunito max-w-[400px] w-[90vw] h-[600px] bg-[#080808]  flex flex-col justify-between items-center rounded-lg p-8  overflow-hidden transition-opacity duration-500 ${
						hideMainBlock ? 'opacity-0' : 'opacity-100'
					}`}
				>
					<div className='flex flex-col items-start justify-start font-bold w-full relative '>
						<div className='flex justify-center items-center'>
							<p className='text-3xl first-letter:uppercase'>теcт на</p>
							<div className='ml-1.5 bg-black h-11 flex justify-center items-center rounded-md -rotate-3 px-1'>
								<svg
									className='w-16 h-16'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 710 350'
								>
									<path
										fill='#fff'
										d='M505.782 49.986c3.253-13.421 22.337-13.421 25.59 0l8.952 36.929a13.168 13.168 0 009.692 9.695l36.92 8.955c13.418 3.254 13.418 22.342 0 25.596l-36.92 8.955a13.171 13.171 0 00-9.692 9.695l-8.952 36.929c-3.253 13.422-22.337 13.422-25.59 0l-8.952-36.929a13.174 13.174 0 00-9.694-9.695l-36.918-8.955c-13.418-3.254-13.418-22.342 0-25.596l36.918-8.955a13.17 13.17 0 009.694-9.695l8.952-36.93zM613.255 178.864c2.003-8.259 13.746-8.259 15.748 0l5.51 22.726a8.102 8.102 0 005.964 5.966l22.72 5.51c8.257 2.003 8.257 13.749 0 15.752l-22.72 5.511a8.104 8.104 0 00-5.964 5.966l-5.51 22.726c-2.002 8.259-13.745 8.259-15.748 0l-5.508-22.726a8.106 8.106 0 00-5.965-5.966l-22.72-5.511c-8.257-2.003-8.257-13.749 0-15.752l22.72-5.51a8.105 8.105 0 005.965-5.966l5.508-22.726zM652.158 48.51c1.314-5.42 9.02-5.42 10.334 0l3.616 14.914a5.315 5.315 0 003.914 3.915l14.91 3.617c5.418 1.314 5.418 9.023 0 10.337l-14.91 3.616a5.315 5.315 0 00-3.914 3.915l-3.616 14.914c-1.314 5.42-9.02 5.42-10.334 0l-3.616-14.913a5.318 5.318 0 00-3.914-3.916l-14.91-3.616c-5.418-1.314-5.418-9.023 0-10.337l14.91-3.617a5.318 5.318 0 003.914-3.915l3.616-14.914z'
									/>
									<path
										fill='#fff'
										fill-rule='evenodd'
										d='M657.325 51.156l-2.951 12.173a13.369 13.369 0 01-9.841 9.844l-12.17 2.951 12.17 2.952a13.369 13.369 0 019.841 9.844l2.951 12.172 2.951-12.172a13.369 13.369 0 019.841-9.844l12.169-2.952-12.169-2.951a13.369 13.369 0 01-9.841-9.844l-2.951-12.173zm5.906-6.59c-1.502-6.195-10.31-6.195-11.811 0l-4.133 17.044a6.076 6.076 0 01-4.473 4.474l-17.04 4.133c-6.193 1.502-6.193 10.312 0 11.814l17.04 4.133a6.077 6.077 0 014.473 4.475l4.133 17.044c1.501 6.194 10.309 6.194 11.811 0l4.131-17.044a6.078 6.078 0 014.474-4.475l17.039-4.133c6.193-1.502 6.193-10.312 0-11.814l-17.039-4.133a6.078 6.078 0 01-4.474-4.474l-4.131-17.044z'
										clip-rule='evenodd'
									/>
									<path
										fill='#fff'
										d='M512.545 281.283c-6.665 0-12.066-5.403-12.066-12.067 0-6.666 5.401-12.069 12.066-12.069 6.663 0 12.064 5.403 12.064 12.069 0 6.664-5.401 12.067-12.064 12.067zM452.219 233.01c-6.663 0-12.065-5.402-12.065-12.067s5.402-12.069 12.065-12.069c6.664 0 12.065 5.404 12.065 12.069 0 6.665-5.401 12.067-12.065 12.067zM584.934 39.92c-6.663 0-12.064-5.403-12.064-12.068 0-6.666 5.401-12.069 12.064-12.069 6.664 0 12.066 5.403 12.066 12.069 0 6.665-5.402 12.068-12.066 12.068zM693.52 172.67c-6.664 0-12.065-5.403-12.065-12.069 0-6.665 5.401-12.068 12.065-12.068 6.663 0 12.065 5.403 12.065 12.068 0 6.666-5.402 12.069-12.065 12.069zM329.94 314.94c3.547 5.573 4.94 10.64 4.18 15.2-.76 4.56-2.787 8.36-6.08 11.4-3.293 3.293-7.347 5.32-12.16 6.08-4.813 1.013-9.627.507-14.44-1.52-4.813-1.773-8.867-5.32-12.16-10.64l-26.22-42.18c-3.547-5.827-8.36-10.26-14.44-13.3-5.827-2.787-13.047-4.18-21.66-4.18l37.62-14.82c11.907 0 21.407 2.153 28.5 6.46 7.093 4.053 13.933 11.273 20.52 21.66l16.34 25.84zm-102.6-39.14c-25.84 0-48.513-5.7-68.02-17.1-19.253-11.4-34.2-27.36-44.84-47.88-10.64-20.773-15.96-45.093-15.96-72.96 0-21.027 3.04-39.9 9.12-56.62 6.08-16.973 14.693-31.413 25.84-43.32 11.4-12.16 24.953-21.407 40.66-27.74C190.1 3.593 207.833.3 227.34.3c26.093 0 48.767 5.7 68.02 17.1 19.253 11.147 34.2 26.98 44.84 47.5s15.96 44.713 15.96 72.58c0 21.027-3.04 40.027-9.12 57-6.08 16.973-14.82 31.54-26.22 43.7-11.147 12.16-24.7 21.533-40.66 28.12-15.707 6.333-33.313 9.5-52.82 9.5zm0-41.8c16.467 0 30.4-3.8 41.8-11.4 11.653-7.6 20.52-18.62 26.6-33.06 6.333-14.44 9.5-31.667 9.5-51.68 0-30.4-6.84-53.96-20.52-70.68-13.427-16.72-32.553-25.08-57.38-25.08-16.213 0-30.147 3.8-41.8 11.4-11.653 7.347-20.647 18.24-26.98 32.68-6.08 14.187-9.12 31.413-9.12 51.68 0 30.147 6.84 53.707 20.52 70.68 13.68 16.973 32.807 25.46 57.38 25.46zM53.58 281.04c-7.853 0-13.933-2.153-18.24-6.46-4.053-4.56-6.08-10.767-6.08-18.62V32.14c0-8.107 2.027-14.313 6.08-18.62 4.307-4.307 10.387-6.46 18.24-6.46 7.853 0 13.807 2.153 17.86 6.46 4.307 4.307 6.46 10.513 6.46 18.62v223.82c0 7.853-2.027 14.06-6.08 18.62-4.053 4.307-10.133 6.46-18.24 6.46z'
									/>
								</svg>
							</div>
							{questions[currentQuestion].level === 4 ? (
								<div className='h-8 w-8 bg-[#0A0908] rounded-full absolute right-0 flex justify-center items-center'>
									<BsExclamationLg size={24} className='opacity-90' />
								</div>
							) : (
								''
							)}
						</div>
						<p className='font-light text-gray-300'>
							Вопрос {currentQuestion + 1} из {questions.length}
						</p>
					</div>
					<div className=' flex flex-col w-full'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='space-y-4 flex flex-col w-full'
						>
							<p className='text-lg text-left w-full '>
								{questions[currentQuestion].question}
							</p>
							<p className='text-xl font-bold mt-5 text-center tracking-wider'>
								{questions[currentQuestion].example}
								<span className='text-zinc-400'>
									{questions[currentQuestion].insert}
								</span>
							</p>
						</motion.div>
					</div>
					<div className='flex flex-col w-full'>
						{questions[currentQuestion].options.map((option, index) => (
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: index === 0 ? 0 : index * 0.1,
								}}
							>
								<AnswerChoice
									val={option}
									classNameSelect={
										selectedAnswers[currentQuestion] === index
											? 'bg-white text-black'
											: ''
									}
									classNameSelectArround={
										selectedAnswers[currentQuestion] === index
											? 'bg-[#080808]'
											: 'bg-white'
									}
									onClick={() => handleAnswerSelect(index)}
								/>
							</motion.div>
						))}
					</div>

					<div className='flex items-center w-full'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className='flex items-center w-full'
						>
							<button
								onClick={() => {
									handleNext()
									{currentQuestion + 2 > questions.length
										? (document.title = 'Результаты')
										: (document.title = 'Вопрос ' + (currentQuestion + 2))}
									
								}}
								disabled={selectedAnswers[currentQuestion] === null}
								className={`bg-white text-[#0A0908] font-bold text-xl rounded-lg w-full outline-none py-2 transition-all duration-300 brightness-100 shadow-[0px_0px_15px_-2px]   ${
									selectedAnswers[currentQuestion] !== null
										? 'hover:brightness-100 shadow-white hover:shadow-white  md:brightness-75 md:shadow-transparent'
										: 'opacity-50 cursor-not-allowed'
								}`}
							>
								{currentQuestion + 1 === questions.length ? (
									<span className='flex justify-center items-center'>
										Результаты
										<svg
											className='ml-2 '
											width='18px'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M5.45049 3.3188C5.67113 2.40889 6.96523 2.40889 7.18587 3.31879L7.79297 5.82247C7.87175 6.14733 8.1254 6.40098 8.45026 6.47975L10.9539 7.08686C11.8638 7.3075 11.8638 8.60159 10.9539 8.82223L8.45026 9.42934C8.1254 9.50811 7.87175 9.76176 7.79297 10.0866L7.18587 12.5903C6.96523 13.5002 5.67113 13.5002 5.45049 12.5903L4.84339 10.0866C4.76462 9.76176 4.51097 9.50811 4.1861 9.42934L1.68243 8.82223C0.772523 8.60159 0.772523 7.3075 1.68243 7.08686L4.1861 6.47975C4.51097 6.40098 4.76462 6.14733 4.84339 5.82247L5.45049 3.3188Z'
												fill='black'
											></path>
											<path
												d='M12.7388 12.0563C12.8745 11.4964 13.6709 11.4964 13.8067 12.0563L14.1803 13.597C14.2288 13.797 14.3849 13.953 14.5848 14.0015L16.1255 14.3751C16.6854 14.5109 16.6854 15.3073 16.1255 15.4431L14.5848 15.8167C14.3849 15.8651 14.2288 16.0212 14.1803 16.2211L13.8067 17.7619C13.6709 18.3218 12.8745 18.3218 12.7388 17.7619L12.3652 16.2211C12.3167 16.0212 12.1606 15.8651 11.9607 15.8167L10.42 15.4431C9.86001 15.3073 9.86001 14.5109 10.42 14.3751L11.9607 14.0015C12.1606 13.953 12.3167 13.797 12.3652 13.597L12.7388 12.0563Z'
												fill='black'
											></path>
											<path
												d='M15.3769 3.21878C15.466 2.85132 15.9886 2.85132 16.0777 3.21878L16.3229 4.22988C16.3547 4.36107 16.4571 4.46351 16.5883 4.49532L17.5994 4.7405C17.9669 4.8296 17.9669 5.35222 17.5994 5.44132L16.5883 5.6865C16.4571 5.71831 16.3547 5.82074 16.3229 5.95194L16.0777 6.96304C15.9886 7.3305 15.466 7.3305 15.3769 6.96304L15.1317 5.95194C15.0999 5.82074 14.9974 5.71831 14.8662 5.6865L13.8551 5.44132C13.4877 5.35222 13.4877 4.8296 13.8551 4.7405L14.8662 4.49532C14.9974 4.46351 15.0999 4.36107 15.1317 4.22988L15.3769 3.21878Z'
												fill='black'
											></path>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M15.7273 3.39817L15.5272 4.2234C15.4472 4.55327 15.1896 4.81081 14.8598 4.8908L14.0345 5.09091L14.8598 5.29102C15.1896 5.371 15.4472 5.62855 15.5272 5.95842L15.7273 6.78365L15.9274 5.95842C16.0074 5.62855 16.2649 5.371 16.5948 5.29102L17.42 5.09091L16.5948 4.8908C16.2649 4.81081 16.0074 4.55327 15.9274 4.2234L15.7273 3.39817ZM16.1277 2.95133C16.0259 2.53137 15.4286 2.53137 15.3268 2.95133L15.0466 4.10687C15.0102 4.25681 14.8932 4.37388 14.7432 4.41024L13.5877 4.69044C13.1677 4.79227 13.1677 5.38955 13.5877 5.49138L14.7432 5.77158C14.8932 5.80794 15.0102 5.92501 15.0466 6.07494L15.3268 7.23049C15.4286 7.65044 16.0259 7.65044 16.1277 7.23049L16.4079 6.07494C16.4443 5.92501 16.5614 5.80794 16.7113 5.77158L17.8668 5.49138C18.2868 5.38955 18.2868 4.79227 17.8668 4.69044L16.7113 4.41024C16.5614 4.37388 16.4443 4.25681 16.4079 4.10687L16.1277 2.95133Z'
												fill='black'
											></path>
											<path
												d='M5.90909 19C5.45722 19 5.09091 18.6337 5.09091 18.1818C5.09091 17.7299 5.45722 17.3636 5.90909 17.3636C6.36096 17.3636 6.72727 17.7299 6.72727 18.1818C6.72727 18.6337 6.36096 19 5.90909 19Z'
												fill='black'
											></path>
											<path
												d='M1.81818 15.7273C1.36631 15.7273 1 15.361 1 14.9091C1 14.4572 1.36631 14.0909 1.81818 14.0909C2.27005 14.0909 2.63636 14.4572 2.63636 14.9091C2.63636 15.361 2.27005 15.7273 1.81818 15.7273Z'
												fill='black'
											></path>
											<path
												d='M10.8182 2.63636C10.3663 2.63636 10 2.27005 10 1.81818C10 1.36631 10.3663 1 10.8182 1C11.2701 1 11.6364 1.36631 11.6364 1.81818C11.6364 2.27005 11.2701 2.63636 10.8182 2.63636Z'
												fill='black'
											></path>
											<path
												d='M18.1818 11.6364C17.7299 11.6364 17.3636 11.2701 17.3636 10.8182C17.3636 10.3663 17.7299 10 18.1818 10C18.6337 10 19 10.3663 19 10.8182C19 11.2701 18.6337 11.6364 18.1818 11.6364Z'
												fill='black'
											></path>
										</svg>
									</span>
								) : (
									<span className='flex justify-center items-center'>
										Следующий вопрос 
									</span>
								)}
							</button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

const AnswerChoice = ({
	val,
	classNameSelect,
	classNameSelectArround,
	onClick,
}) => {
	return (
		<div className='relative '>
			<button
				className={`answer-choice flex items-center  ${classNameSelect}`}
				onClick={onClick}
			>
				<div className={`arround-black ${classNameSelectArround}`}></div>
				<div className='text-left ml-2'>
					<span className='text-[1.1rem] md:text-[1.3rem]'>{val}</span>
				</div>
			</button>
		</div>
	)
}

export default App
