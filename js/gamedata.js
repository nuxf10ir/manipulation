var gameData = {
    questionsData: {
        1: {
            text: "" +
                "Подчиненный не выполнил достаточно простое задание и оправдывается. " +
                "Он называет причины, которые не позволили завершить задачу, но на самом деле препятствий не было: " +
                "«Я не могу выполнять одновременно несколько дел. На мне ещё 5 срочных задач. " +
                "И когда я хотел обсудить эту задачу, Вас не было на рабочем месте».",
            variants: [
                {
                    text: "" +
                        "Когда вы приходили ко мне за помощью? " +
                        "Я, наверное, был в командировке. " +
                        "Надо было ещё раз прийти, когда я вернулся.",
                    answerId: 1
                },
                {
                    text: "" +
                        "Хорошо, давайте обсудим ваши задачи. " +
                        "Какая помощь нужна? " +
                        "Что конкретно не получается?",
                    answerId: 2
                },
                {
                    text: "" +
                        "Почему вы не предупредили заранее, что не успеваете? " +
                        "Я всегда доступен(а) по телефону или почте. " +
                        "Эта задача входит в ваши обязанности и за ее выполнение вы получаете зарплату.",
                    answerId: 3
                }
            ]
        },
        2: {
            text: "" +
                "Подчиненный, которого Вы планируете уволить из-за недостаточной компентенции, " +
                "при обсуждении результатов его работы и ошибок говорит Вам: " +
                "«Я выполняю свою работу так, как написано в инструкциях и в соответствии с трудовым законодательством. " +
                "У вас нет оснований меня уволить. Если попробуете, то я знаю, как действовать!»",
            variants: [
                {
                    text: "Захочу &mdash; уволю!",
                    answerId: 1
                },
                {
                    text: "" +
                        "Замечательно, что вы знаете инструкции и трудовое законодательство. " +
                        "Я их тоже знаю. " +
                        "Так что, когда придет время, мы с вами будем говорить на одном юридическом языке.",
                    answerId: 2
                },
                {
                    text: "А почему вы решили, что я собираюсь вас уволить?",
                    answerId: 3
                }
            ]
        },
        3: {
            text: "" +
                "Генеральный директор предлагает Вам взять контроль над новой дочерней компанией, " +
                "но об оплате этих услуг не упоминает ни слова: " +
                "«Я могу доверять только вам. Более надежного и квалифицированного человека мне не найти. " +
                "Конечно, это непростые задачи, но уверен, что вы справитесь».",
            variants: [
                {
                    text: "Спасибо за доверие! Конечно, я согласен(на)!",
                    answerId: 1
                },
                {
                    text: "" +
                        "Очень интересное предложение. " +
                        "Я хотел(а) бы все обдумать и принять решение, когда станут известны все условия. " +
                        "Когда я могу дать свой окончательный ответ?",
                    answerId: 2
                },
                {
                    text: "" +
                        "Боюсь, с этим объемом я не справлюсь. " +
                        "Но я могу проконсультировать и научить других сотрудников.",
                    answerId: 3
                }
            ]
        },
        4: {
            text: "" +
                "Ваш коллега уже не в первый раз просит помочь ему: " +
                "«Пожалуйста, помогите, или я не получу премию! " +
                "Генеральный директор будет очень недоволен, если я не выполню эту задачу. " +
                "А у меня семья, ипотека и т.д.».",
            variants: [
                {
                    text: "" +
                        "Я правильно понимаю, вы просите поработать за вас? " +
                        "Мне казалось, за свою работу вы получаете зарплату. " +
                        "Разве не так?",
                    answerId: 1
                },
                {
                    text: "" +
                        "Да, семья – это конечно же очень важно. " +
                        "Я с радостью вам помогу.",
                    answerId: 2
                },
                {
                    text: "Помочь могу только советом. В чем проблема?",
                    answerId: 3
                }
            ]
        },
        5: {
            text: "" +
                "Сотрудник постоянно говорит вам, что вы &mdash; замечательный начальник, " +
                "как приятно работать под вашим руководством. " +
                "Из командировок он привозит подарки и всячески пытается оказать какую-либо услугу",
            variants: [
                {
                    text: "Огромное спасибо, как приятно, я польщен(а), но не стоило беспокоиться.",
                    answerId: 1
                },
                {
                    text: "Спасибо, с меня теперь сувенир из следующего отпуска!",
                    answerId: 2
                },
                {
                    text: "" +
                        "Спасибо. " +
                        "Я тоже очень ценю Вас как подчиненного – ведь Вы так ответственно относитесь к работе. " +
                        "Кстати, сегодня до двух часов я жду от Вас отчет",
                    answerId: 3
                }
            ]
        }
    },
    answersData: {
        1: {
            1: {
                step: 1,
                title: "Неверно",
                text: "Не стоит оправдываться &mdash; это ослабит Вашу позицию в диалоге",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 1
            },
            2: {
                step: 1,
                title: "Неверно",
                text: "Манипулятору удалось уйти от ответственности, а Вы потратите время на то, чтобы решить его задачу",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 1
            },
            3: {
                step: 1,
                title: "Верно!",
                text: "" +
                    "Вы обозначаете границы ответственности подчиненного и пресекаете манипуляции. " +
                    "Важно уметь слышать подчиненных, как и помогать им советом с действительно сложными проектами. " +
                    "Но если на Вас пытаются переложить ответственность за простую халатность, не поддавайтесь.",
                resume: "Главная цель манипулятора &mdash; снять с&nbsp;себя ответственность и по&nbsp;возможности не&nbsp;выполнять работу.",
                type: "right",
                buttonText: "Продолжить",
                nextQuestion: 2
            }
        },
        2: {
            1: {
                step: 2,
                title: "Неверно",
                text: "Агрессивная позиция как ни парадоксально, показывает слабость.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 2
            },
            2: {
                step: 2,
                title: "Верно!",
                text: "Вы подыгрываете собеседнику, но&nbsp;показываете свою осведомленность в&nbsp;вопросах, которые поднимает подчиненный.",
                resume: "Главная цель манипулятора &mdash; запугать вас. Не&nbsp;поддавайтесь.",
                type: "right",
                buttonText: "Продолжить",
                nextQuestion: 3
            },
            3: {
                step: 2,
                title: "Неверно",
                text: "Если вы уже приняли решение об увольнении, то лучше не преподносить обратную информацию.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 2
            }
        },
        3: {
            1: {
                step: 3,
                title: "Неверно",
                text: "" +
                    "Вы не обдумали ситуацию, дали эмоциональный ответ. " +
                    "В будущем вы рискуете разочароваться: работы и ответственности станет больше, " +
                    "а вознаграждение останется на прежнем уровне.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 3
            },
            2: {
                step: 3,
                title: "Верно!",
                text: "" +
                    "Вы уходите от решения «здесь и сейчас», " +
                    "чтобы подготовиться и предметно обсудить вопрос. " +
                    "Кроме того, мягко обозначаете, что предложение содержит не все условия.",
                resume: "" +
                    "Главная цель манипулятора &mdash; нагрузить вас дополнительной работой и&nbsp;ответственностью, " +
                    "при этом не&nbsp;увеличивать фонд заработной платы.",
                type: "right",
                buttonText: "Продолжить",
                nextQuestion: 4
            },
            3: {
                step: 3,
                title: "Неверно",
                text: "" +
                    "Вы отказываете, понимая, что руководитель не заговаривает о деньгах, " +
                    "но взамен предлагаете свою роль наставника. " +
                    "Вы уверены, что не в этом заключалась главная цель собеседника? " +
                    "Особенно, если ему известно о Вашей загрузке. " +
                    "Ведь обучение и наставничество тоже потребуют вложений времени и сил, которые не будут оплачены.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 3
            }
        },
        4: {
            1: {
                step: 4,
                title: "Верно!",
                text: "" +
                    "Вы озвучиваете правила и границы ответственности. " +
                    "Манипулятор после такого ответа возможно обидится на вас, но вас это не должно огорчать.",
                resume: "" +
                    "Главная цель манипулятора &mdash; вызвать в&nbsp;вас сочувствие и&nbsp;передать свою работу.",
                type: "right",
                buttonText: "Продолжить",
                nextQuestion: 5
            },
            2: {
                step: 4,
                title: "Неверно",
                text: "Манипулятор достиг своей цели – использует ваши ресурсы, чтобы выполнить свою задачу.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 4
            },
            3: {
                step: 4,
                title: "Неверно",
                text: "" +
                    "Если вы задаете подобные вопросы, то уже включаетесь в процесс. " +
                    "Кроме того, манипулятор может подходить за советом каждые полчаса.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 4
            }
        },
        5: {
            1: {
                step: 5,
                title: "Неверно",
                text: "Вы реагируете эмоционально, а это показатель того, что манипулятор может управлять вами.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 5
            },
            2: {
                step: 5,
                title: "Неверно",
                text: "Вы уходите из зоны “подчиненный-руководитель”, нарушение субординации плохо скажется на сотрудничестве в будущем.",
                resume: null,
                type: "wrong",
                buttonText: "Выбрать другой ответ",
                nextQuestion: 5
            },
            3: {
                step: 5,
                title: "Верно!",
                text: "Вы вежливо показываете собеседнику, что играете по&nbsp;своим правилам.",
                resume: "" +
                    "Главная цель манипулятора &mdash; вызвать чувство долга.",
                type: "right",
                buttonText: "Узнать результат",
                nextQuestion: -1
            }
        }
    }
};